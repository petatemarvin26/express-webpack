import {AbsMiddleware} from '@/common/abstract';
import {ErrorHandler} from '@/common/types/api';

export default class ErrorHandlerMiddleware extends AbsMiddleware {
  public handler: ErrorHandler = (err, req, res, next) => {
    console.log(err);
  };
}
