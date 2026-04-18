import express from 'express';

import {AbsMiddleware} from '@/common/abstract';
import {Handler} from '@/common/types/api';

export default class UrlEndcodedMiddleware extends AbsMiddleware {
  public handler: Handler = express.urlencoded({extended: true});
}
