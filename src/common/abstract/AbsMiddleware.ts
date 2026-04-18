import {Handler} from '@/common/types/api';

abstract class AbsMiddleware {
  public abstract handler: Handler;
}

export default AbsMiddleware;
