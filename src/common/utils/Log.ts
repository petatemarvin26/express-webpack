class Log {
  private static now() {
    const date = new Date();
    const calndr = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return `[${calndr} - ${time}]:`;
  }
  public static _instance() {
    return new Log();
  }
  /**
   * Use for object
   */
  public static table(object: object) {
    console.info(this.now());
    console.table(object);
  }
  /**
   *  Use for information
   */
  public static info(...msgs: any[]) {
    console.info(this.now(), ...msgs);
  }
  /**
   * Use for error stack trace
   */
  public static err(...msgs: any[]) {
    console.error(this.now(), ...msgs);
  }
}

export default Log;
