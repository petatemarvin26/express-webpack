import {Router} from 'express';

import AbsService from './AbsService';
import AbsMiddleware from './AbsMiddleware';

abstract class AbsRouter {
  private _router: Router = Router();

  public abstract services: Array<AbsService>;
  public abstract routers: Array<AbsRouter>;
  public abstract middlewares: Array<AbsMiddleware>;
  public abstract endpoint: string;

  constructor() {
    this.getRouter = this.getRouter.bind(this);
  }

  public getRouter(): Router {
    return this._router;
  }

  protected registerServices() {
    this.services.forEach(({method, endpoint, handler}) => {
      this._router[method](endpoint, handler);
    });
  }
  protected registerRouters() {
    this.routers.forEach(({endpoint, _router}) => {
      this._router.use(endpoint, _router);
    });
  }
  protected registerMiddlewares() {
    this.middlewares.forEach(({handler}) => {
      this._router.use(handler);
    });
  }
}

export default AbsRouter;
