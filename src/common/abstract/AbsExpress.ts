import express, {Express} from 'express';

import {Log} from '@/common/utils';

import AbsRouter from './AbsRouter';
import AbsMiddleware from './AbsMiddleware';
import AbsService from './AbsService';
import AbsFallback from './AbsFallback';

abstract class AbsExpress {
  protected _express: Express = express();

  protected abstract PORT: number;
  protected abstract HOST: string;

  protected abstract get routers(): Array<AbsRouter>;
  protected abstract get middlewares(): Array<AbsMiddleware>;
  protected abstract get services(): Array<AbsService>;
  protected abstract get fallbacks(): Array<AbsFallback>;

  constructor() {
    this.registerMiddlewares();
    this.registerRouters();
    this.registerServices();
    this.registerFallbacks();
  }

  protected registerRouters() {
    this.routers.forEach(({endpoint, getRouter}) => {
      this._express.use(endpoint, getRouter());
    });
  }

  protected registerMiddlewares() {
    this.middlewares.forEach(({middlewares, handler, fallbacks}) => {
      const middlr_handlers = middlewares.map((m) => m.handler);
      const fallbacks_handlers = fallbacks.map((f) => f.handler);
      this._express.use(...middlr_handlers, handler, ...fallbacks_handlers);
    });
  }

  protected registerServices() {
    this.services.forEach(
      ({method, endpoint, middlewares, handler, fallbacks}) => {
        const middlr_handlers = middlewares.map((m) => m.handler);
        const fallbacks_handlers = fallbacks.map((f) => f.handler);
        this._express[method](
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
      this._express.use(handler);
    });
  }

  protected run() {
    this._express.listen(this.PORT, this.HOST, () => {
      Log.info(`Express application run in http://${this.HOST}:${this.PORT}`);
    });
  }
}

export default AbsExpress;
