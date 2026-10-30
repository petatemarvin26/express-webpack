import {AbsMiddleware, AbsRouter, AbsService} from '@/common/abstract';
import {V1Router} from './v1';

export class ApiRouter extends AbsRouter {
  public endpoint: string = '/api';
  public middlewares: AbsMiddleware[] = [];
  public routers: AbsRouter[] = [new V1Router()];
  public services: AbsService[] = [];

  constructor() {
    super();
    this.registerRouters();
  }
}
