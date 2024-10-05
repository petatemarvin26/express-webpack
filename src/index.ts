import App from "App";

(async () => {
  if (!process.env.ENV) {
    await import("dotenv/config");
  }
  App.start();
})();
