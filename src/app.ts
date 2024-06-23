import express, { Express } from "express";
import { Log } from "utils";

class App {
  _app: Express;
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
    // register your middleware here
  }

  public static _instance() {
    return new App();
  }

  public static async start() {
    const app = App._instance();
    app.start();
  }
}

export default App;
