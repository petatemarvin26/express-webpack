import express from 'express';

import {AbsMiddleware} from '@/common/abstract';
import type {Handler} from '@/common/types/api';

export class JsonMiddleware extends AbsMiddleware {
  public middlewares: AbsMiddleware[] = [];
  public fallbacks: AbsMiddleware[] = [];
  public handler: Handler = express.json();
}
