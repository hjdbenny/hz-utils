import t from"events";class e{constructor(){this.event=new t}init(t){this.event.emit("init","HzKonva init")}on(t,e){this.event.on(t,(t=>{e(t)}))}}export{e as default};
