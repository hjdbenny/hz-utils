import EventEmitter from "events"
class HzKonva {

  event: EventEmitter = new EventEmitter()
  constructor() {
  }

  init() {
    setTimeout(() => {
      this.event.emit('init', 'HzKonva init')
    });
  }

  on(event: string, callback: any) {
    this.event.on(event, (data: any) => {
      callback(data)
    })
  }
}
export default HzKonva