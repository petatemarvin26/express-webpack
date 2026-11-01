import {
  AbsFallback,
  AbsMiddleware,
  AbsRouter,
  AbsService
} from '@/common/abstract';
import {HealthService} from '@/api/v1/services/Health.service';

export class HealthRouter extends AbsRouter {
  public endpoint: string = '/health';

  public get routers(): AbsRouter[] {
    return [];
  }

  public get middlewares(): AbsMiddleware[] {
    return [];
  }

  public get services(): AbsService[] {
    return [new HealthService()];
  }

  public get fallbacks(): AbsFallback[] {
    return [];
  }
}
