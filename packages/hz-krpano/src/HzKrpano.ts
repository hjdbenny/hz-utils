import EventEmitter from "events"
// import a from "./tour.js"
class HzKrpano {

  event: EventEmitter = new EventEmitter()
  constructor() {
    // this.loadSrcipt()
  }

  init() {
    setTimeout(() => {
      this.event.emit('init', 'HzKrpano init')
    });
  }

  on(event: string, callback: any) {
    this.event.on(event, (data: any) => {
      callback(data)
    })
  }

  loadSrcipt() {
    // 创建一个新的 script 元素
    const script = document.createElement('script');
    // 设置 script 元素的 src 属性
    script.src = './tour.js';
    // 设置 script 元素的类型
    script.type = 'text/javascript';
    // 将 script 元素添加到文档的头部
    document.head.appendChild(script);
  }
}
export default HzKrpano