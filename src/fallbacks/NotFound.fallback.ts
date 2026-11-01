import AbsFallback from '@/common/abstract/AbsFallback';
import type {Handler} from '@/common/types/api';

export class NotFoundFallback extends AbsFallback {
  public handler: Handler = (_, res, next) => {
    res.status(404).send('NOT FOUND!');
  };
}
