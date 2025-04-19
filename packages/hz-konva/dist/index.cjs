"use strict";var t=require("events");module.exports=class{constructor(){this.event=new t,this.init()}init(){this.event.emit("init","HzKonva init")}on(t,e){this.event.on(t,e)}};
