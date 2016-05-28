export default class Logger {
  trace() {
    console.trace.apply(console, arguments)
  }
  debug() {
    console.log.apply(console, arguments)
  }
  info() {
    console.info.apply(console, arguments)
  }
  log() {
    console.log.apply(console, arguments)
  }
  warn() {
    console.warn.apply(console, arguments)
  }
  error() {
    console.error.apply(console, arguments)
  }
}


export default Logger;