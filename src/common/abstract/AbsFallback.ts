import type {ErrorHandler, Handler} from '@/common/types/api';

abstract class AbsFallback {
  public abstract handler: Handler | ErrorHandler;
}

export default AbsFallback;
