import type {Handler, Methods} from '@/common/types/api';
import AbsMiddleware from './AbsMiddleware';
import AbsFallback from './AbsFallback';

abstract class AbsService {
  public abstract endpoint: string;
  public abstract method: Methods;
  public abstract handler: Handler;

  public abstract get middlewares(): Array<AbsMiddleware>;
  public abstract get fallbacks(): Array<AbsFallback>;
}

export default AbsService;
