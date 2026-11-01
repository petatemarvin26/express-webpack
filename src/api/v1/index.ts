import {AbsMiddleware, AbsRouter, AbsService} from '@/common/abstract';
import {HealthRouter} from '@/api/v1/routers/Health.router';
import AbsFallback from '@/common/abstract/AbsFallback';

export class V1Router extends AbsRouter {
  public endpoint: string = '/v1';

  public get routers(): AbsRouter[] {
    return [new HealthRouter()];
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
