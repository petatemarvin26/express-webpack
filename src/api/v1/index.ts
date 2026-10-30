import {AbsMiddleware, AbsRouter, AbsService} from '@/common/abstract';

export class V1Router extends AbsRouter {
  public endpoint: string = '/v1';
  public middlewares: AbsMiddleware[] = [];
  public routers: AbsRouter[] = [];
  public services: AbsService[] = [];

  constructor() {
    super();
    this.registerRouters();
  }
}
