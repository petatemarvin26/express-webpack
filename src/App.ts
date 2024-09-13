import express, { Express } from "express";
import { Log } from "utils";

class App {
  _app: Express;
  static _instance: null | App = null;
  constructor() {
    this._app = express();

    this.registerRouters();
    this.registerMiddlewares();
  }

  private start() {
    const PORT = process.env.PORT;
    this._app.listen(PORT, () => {
      Log.msg("The server runs in port", PORT);
    });
  }

  private registerRouters() {
    // register your router here

    this._app.get("/", (req, res) => {
      res.status(200).json({ message: "healthy" });
    });
  }

  private registerMiddlewares() {
    // register your middlewares here
  }

  public static instance() {
    if (this._instance !== null) {
      return this._instance;
    }
    return new App();
  }

  public static start() {
    const app = App.instance();
    app.start();
  }
}

export default App;
