import t from"events";class i{constructor(){this.event=new t,this.init()}init(){setTimeout((()=>{this.event.emit("init","HzKonva init")}))}on(t,i){this.event.on(t,(t=>{i(t)}))}}export{i as default};
