import {Router} from 'express';

import AbsService from './AbsService';
import AbsMiddleware from './AbsMiddleware';
import AbsFallback from './AbsFallback';

abstract class AbsRouter {
  protected _router: Router = Router();

  public abstract endpoint: string;

  public abstract get routers(): Array<AbsRouter>;
  public abstract get middlewares(): Array<AbsMiddleware>;
  public abstract get services(): Array<AbsService>;
  public abstract get fallbacks(): Array<AbsFallback>;

  constructor() {
    this.registerMiddlewares();
    this.registerRouters();
    this.registerServices();
    this.registerFallbacks();

    this.getRouter = this.getRouter.bind(this);
  }

  public getRouter(): Router {
    return this._router;
  }

  protected registerRouters() {
    this.routers.forEach(({endpoint, _router}) => {
      this._router.use(endpoint, _router);
    });
  }

  /**
   * Middleware registration dept is only 1
   */
  protected registerMiddlewares() {
    this.middlewares.forEach(({middlewares, handler, fallbacks}) => {
      const middlr_handlers = middlewares.map((m) => m.handler);
      const fallbacks_handlers = fallbacks.map((f) => f.handler);
      this._router.use(...middlr_handlers, handler, ...fallbacks_handlers);
    });
  }

  protected registerServices() {
    this.services.forEach(
      ({method, endpoint, middlewares, handler, fallbacks}) => {
        const middlr_handlers = middlewares.map((m) => m.handler);
        const fallbacks_handlers = fallbacks.map((f) => f.handler);
        this._router[method](
          endpoint,
          ...middlr_handlers,
          handler,
          ...fallbacks_handlers
        );
      }
    );
  }

  protected registerFallbacks() {
    this.fallbacks.forEach(({handler}) => {
      this._router.use(handler);
    });
  }
}

export default AbsRouter;
