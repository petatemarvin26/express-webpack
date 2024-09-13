import App from "App";

(async () => {
  if (!process.env.NODE_ENV) {
    await import("dotenv/config");
  }
  App.start();
})();
