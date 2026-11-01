import {AbsFallback, AbsMiddleware, AbsService} from '@/common/abstract';
import type {Handler, Methods} from '@/common/types/api';

export class HealthService extends AbsService {
  public endpoint: string = '/';
  public method: Methods = 'get';
  public handler: Handler = (req, res) => {
    res.status(200).json({result: 'Healthy!'});
  };

  public get middlewares(): AbsMiddleware[] {
    return [];
  }

  public get fallbacks(): AbsFallback[] {
    return [];
  }
}
