import {
  AbsFallback,
  AbsMiddleware,
  AbsRouter,
  AbsService
} from '@/common/abstract';

import {V1Router} from './v1';
export class ApiRouter extends AbsRouter {
  public endpoint: string = '/api';

  public get routers(): AbsRouter[] {
    return [new V1Router()];
  }

  public get middlewares(): AbsMiddleware[] {
    return [];
  }

  public get services(): AbsService[] {
    return [];
  }

  public get fallbacks(): AbsFallback[] {
    return [];
  }
}
