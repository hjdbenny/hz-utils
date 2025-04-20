import EventEmitter from "events"
class HzKonva {

  event: EventEmitter = new EventEmitter()
  constructor() {
  }

  init(domId: string) {
    this.event.emit('init', 'HzKonva init')

  }

  on(event: string, callback: any) {
    this.event.on(event, (data: any) => {
      callback(data)
    })
  }
}
export default HzKonva