import {AbsFallback, AbsMiddleware} from '@/common/abstract';
import type {Handler} from '@/common/types/api';
import {Log} from '@/common/utils';

export class LoggerMiddleware extends AbsMiddleware {
  public handler: Handler = (req, res, next) => {
    const endpoint = req.path;
    res.on('finish', () => Log.info(req.method, endpoint, res.statusCode));
    next();
  };

  public get fallbacks(): AbsFallback[] {
    return [];
  }

  public get middlewares(): AbsMiddleware[] {
    return [];
  }
}
