import cors from 'cors';

import {AbsMiddleware} from '@/common/abstract';
import {Handler} from '@/common/types/api';
import {CORS_OPTS} from '@/common/constants/config';

export default class CorsMiddleware extends AbsMiddleware {
  public handler: Handler = cors(CORS_OPTS);
}
