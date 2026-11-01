import AbsFallback from '@/common/abstract/AbsFallback';
import type {ErrorHandler} from '@/common/types/api';

export class ExceptionFallback extends AbsFallback {
  public handler: ErrorHandler = (err, req, res, next) => {
    res.status(500).json({message: `Exception: ${err.message}`});
  };
}
