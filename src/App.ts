import AbsExpress from '@/common/abstract/AbsExpress';
import AbsMiddleware from '@/common/abstract/AbsMiddleware';
import AbsRouter from '@/common/abstract/AbsRouter';
import {
  CorsMiddleware,
  JsonMiddleware,
  UrlEncodedMiddleware
} from '@/middlewares';

export default class App extends AbsExpress {
  protected HOST: string = 'localhost';
  protected PORT: number = 4000;
  protected middlewares: AbsMiddleware[] = [
    new CorsMiddleware(),
    new JsonMiddleware(),
    new UrlEncodedMiddleware()
  ];
  protected routers: AbsRouter[] = [];

  constructor() {
    super();
    this.registerMiddlewares();
    this.registerRouters();
  }

  private static _instance: App | null = null;
  public static getInstance() {
    if (!this._instance) {
      this._instance = new App();
    }
    return this._instance;
  }
  public static run() {
    const app = App.getInstance();
    app.run();
  }
}
