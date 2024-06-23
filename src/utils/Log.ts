class Log {
  private print(...args: any[]) {
    const date = new Date();
    const calndr = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    console.log(`[${calndr} - ${time}]:`, ...args);
  }
  private table(arg: any) {
    console.table(arg);
  }
  public static _instance() {
    return new Log();
  }
  public static tabl(object: object) {
    const log = Log._instance();
    log.table(object);
  }
  public static msg(...msgs: any[]) {
    const log = Log._instance();
    log.print(...msgs);
  }
}

export default Log;
