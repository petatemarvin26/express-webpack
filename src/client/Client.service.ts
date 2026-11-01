import path from 'path';

import {AbsFallback, AbsMiddleware, AbsService} from '@/common/abstract';
import type {Handler, Methods} from '@/common/types/api';
import {PUBLIC_PATH} from '@/common/constants/keys';

export class ClientService extends AbsService {
  public endpoint: string = '/{*path}';
  public method: Methods = 'get';

  public handler: Handler = (_, res) => {
    const staticfiles = path.join(process.cwd(), PUBLIC_PATH);
    res.sendFile(path.join(staticfiles, 'index.html'));
  };

  public get middlewares(): AbsMiddleware[] {
    return [];
  }

  public get fallbacks(): AbsFallback[] {
    return [];
  }
}
