import express from 'express';

import {AbsMiddleware} from '@/common/abstract';
import {Handler} from '@/common/types/api';

export default class JsonMiddleware extends AbsMiddleware {
  public handler: Handler = express.json();
}
