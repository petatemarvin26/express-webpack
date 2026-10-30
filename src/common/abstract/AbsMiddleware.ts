import {ErrorHandler, Handler} from '@/common/types/api';

abstract class AbsMiddleware {
  public abstract handler: Handler | ErrorHandler;
}

export default AbsMiddleware;
