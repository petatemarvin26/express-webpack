import type {Handler} from '@/common/types/api';

import AbsFallback from './AbsFallback';

abstract class AbsMiddleware {
  public abstract handler: Handler;
  public abstract get middlewares(): Array<AbsMiddleware>;
  public abstract get fallbacks(): Array<AbsFallback>;
}

export default AbsMiddleware;
