import express, {Express} from 'express';

import {Log} from '@/common/utils';

import AbsRouter from './AbsRouter';
import AbsMiddleware from './AbsMiddleware';

abstract class AbsExpress {
  public _express: Express = express();

  protected abstract PORT: number;
  protected abstract HOST: string;
  protected abstract routers: Array<AbsRouter>;
  protected abstract middlewares: Array<AbsMiddleware>;

  protected registerRouters() {
    this.routers.forEach(({endpoint, getRouter}) => {
      this._express.use(endpoint, getRouter());
    });
  }

  protected registerMiddlewares() {
    this.middlewares.forEach(({handler}) => {
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
