import cors from 'cors';

import {AbsMiddleware} from '@/common/abstract';
import type {Handler} from '@/common/types/api';
import {CORS_OPTS} from '@/common/constants/config';

export class CorsMiddleware extends AbsMiddleware {
  public middlewares: AbsMiddleware[] = [];
  public fallbacks: AbsMiddleware[] = [];
  public handler: Handler = cors(CORS_OPTS);
}
