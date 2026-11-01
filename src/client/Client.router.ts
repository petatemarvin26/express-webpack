import path from 'path';
import express from 'express';

import {
  AbsFallback,
  AbsMiddleware,
  AbsRouter,
  AbsService
} from '@/common/abstract';
import {ClientService} from '@/client/Client.service';
import {PUBLIC_PATH} from '@/common/constants/keys';

export class ClientRouter extends AbsRouter {
  public endpoint: string = '/app';

  constructor() {
    super();
    const staticfiles = path.join(process.cwd(), PUBLIC_PATH);
    this._router.use(express.static(staticfiles));
  }

  public get routers(): AbsRouter[] {
    return [];
  }

  public get middlewares(): AbsMiddleware[] {
    return [];
  }

  public get services(): AbsService[] {
    return [new ClientService()];
  }

  public get fallbacks(): AbsFallback[] {
    return [];
  }
}
