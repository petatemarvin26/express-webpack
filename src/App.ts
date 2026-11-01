import AbsExpress from '@/common/abstract/AbsExpress';
import AbsMiddleware from '@/common/abstract/AbsMiddleware';
import AbsRouter from '@/common/abstract/AbsRouter';
import {
  CorsMiddleware,
  JsonMiddleware,
  LoggerMiddleware,
  UrlEncodedMiddleware
} from '@/middlewares';

import {ApiRouter} from '@/api';
import {ClientRouter} from '@/client';
import {ExceptionFallback, NotFoundFallback} from '@/fallbacks/';
import {AbsFallback, AbsService} from '@/common/abstract';

export default class App extends AbsExpress {
  protected HOST: string = 'localhost';
  protected PORT: number = 4000;

  protected get routers(): AbsRouter[] {
    return [new ApiRouter(), new ClientRouter()];
  }

  protected get middlewares(): AbsMiddleware[] {
    return [
      new CorsMiddleware(),
      new JsonMiddleware(),
      new UrlEncodedMiddleware(),
      new LoggerMiddleware()
    ];
  }

  protected get services(): AbsService[] {
    return [];
  }

  protected get fallbacks(): AbsFallback[] {
    return [new ExceptionFallback(), new NotFoundFallback()];
  }

  private static _instance: App | null = null;
  public static getInstance() {
    if (!this._instance) {
      this._instance = new App();
    }
    return this._instance;
  }
  public static run() {
    const app = App.getInstance();
    app.run();
  }
}
