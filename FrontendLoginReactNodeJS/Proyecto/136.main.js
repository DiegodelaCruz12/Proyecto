"use strict";(self.webpackChunkxml_react=self.webpackChunkxml_react||[]).push([[136],{136:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var o=n(540);const a=function(){return(0,o.useEffect)((function(){var e=document.getElementById("snake-game");navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){console.log("Permiso de micrófono otorgado"),e.contentWindow.postMessage({type:"micPermission",granted:!0},"*")})).catch((function(t){console.error("Error al obtener permiso del micrófono:",t),e.contentWindow.postMessage({type:"micPermission",granted:!1},"*")}))}),[]),o.createElement("div",null,o.createElement("iframe",{id:"snake-game",src:"https://localhost:9999/static/snake.js/index.html",title:"Snake Game",width:"600",height:"500",allow:"microphone"}))}}}]);