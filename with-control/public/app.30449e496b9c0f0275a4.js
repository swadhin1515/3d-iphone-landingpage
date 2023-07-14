!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,s;return t=e,(i=[{key:"init",value:function(){var e=this;this.group=new THREE.Object3D,this.bgColor=window.getComputedStyle(document.body,null).getPropertyValue("background-color"),this.gui=new dat.GUI,this.gui.closed=!0,this.gridSize=40,this.buildings=[],this.fogConfig={color:"#373435",near:1,far:208},this.width=window.innerWidth,this.height=window.innerHeight,this.createScene(),this.createCamera(),this.addAmbientLight(),this.addSpotLight(),this.addCameraControls(),this.addFloor(),this.addBackgroundShape(),this.loadModels("https://raw.githubusercontent.com/iondrimba/images/master/buildings.obj",this.onLoadModelsComplete.bind(this)),this.animate();var t=this.gui.addFolder("Fog");t.addColor(this.fogConfig,"color").onChange((function(t){e.scene.fog.color=new THREE.Color(t),e.backgroundShape.material.color=e.hexToRgbTreeJs(t),document.body.style.backgroundColor=t})),t.add(this.fogConfig,"far",1,1e3).onChange((function(t){e.scene.fog.far=t})),this.pointLightObj={color:"#5f5157",intensity:4,position:{x:-15,y:29,z:43}},this.addPointLight(this.pointLightObj,"First light"),this.pointLightObj1={color:"#848484",intensity:2.2,position:{x:-7,y:100,z:-100}},this.addPointLight(this.pointLightObj1,"Second light"),this.pointLightObj2={color:"#271c41",intensity:1.8,position:{x:-30,y:-20,z:-51}},this.addPointLight(this.pointLightObj2,"Third light"),this.pointLightObj3={color:"#0000ff",intensity:2.1,position:{x:5,y:53,z:-13}},this.addPointLight(this.pointLightObj3,"Fourth light")}},{key:"addPointLight",value:function(e,t){var i=this,o=new THREE.PointLight(e.color,e.intensity);o.position.set(e.position.x,e.position.y,e.position.z),this.scene.add(o);var n=this.gui.addFolder(t);n.add(e,"intensity",1,10).onChange((function(e){o.intensity=e})),n.addColor(e,"color").onChange((function(e){o.color=i.hexToRgbTreeJs(e)})),n.add(e.position,"x",-100,100).onChange((function(e){o.position.x=e})),n.add(e.position,"y",-100,100).onChange((function(e){o.position.y=e})),n.add(e.position,"z",-100,100).onChange((function(e){o.position.z=e}))}},{key:"getRandomBuiding",value:function(){return this.models[Math.floor(Math.random()*Math.floor(this.models.length))]}},{key:"onLoadModelsComplete",value:function(e){var t=this;this.models=o(e.children).map((function(e){return e.scale.set(.01,.01,.01),e.position.set(0,-14,0),e.receiveShadow=!0,e.castShadow=!0,e})),setTimeout((function(){t.removeLoader(),t.showBuildings(),window.addEventListener("resize",t.onResize.bind(t))}),500),this.draw()}},{key:"removeLoader",value:function(){document.querySelector(".loader").classList.add("loader--done")}},{key:"draw",value:function(){var e=this,t={color:"#161616",metalness:.79,emissive:"#000000",roughness:.8},i=new THREE.MeshPhysicalMaterial(t),o=this.gui.addFolder("Building Material");o.addColor(t,"color").onChange((function(t){i.color=e.hexToRgbTreeJs(t)})),o.addColor(t,"emissive").onChange((function(t){i.emissive=e.hexToRgbTreeJs(t)})),o.add(t,"metalness",0,1).onChange((function(e){i.metalness=e})),o.add(t,"roughness",0,1).onChange((function(e){i.roughness=e}));for(var n=0;n<this.gridSize;n++)for(var s=0;s<this.gridSize;s++){var r=this.getRandomBuiding().clone();r.material=i,r.scale.y=Math.random()*(.008+.01),r.position.x=3*n,r.position.z=3*s,this.group.add(r),this.buildings.push(r)}this.scene.add(this.group),this.group.position.set(-this.gridSize-10,1,-this.gridSize-10)}},{key:"showBuildings",value:function(){this.sortBuildingsByDistance(),this.buildings.forEach((function(e,t){TweenMax.to(e.position,.6+t/4e3,{y:1,ease:Expo.easeOut,delay:t/4e3})}))}},{key:"sortBuildingsByDistance",value:function(){this.buildings.sort((function(e,t){return e.position.z>t.position.z?1:e.position.z<t.position.z?-1:0})).reverse()}},{key:"loadModels",value:function(e,t){(new THREE.OBJLoader).load(e,t)}},{key:"onResize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}},{key:"createScene",value:function(){this.scene=new THREE.Scene,this.renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,document.body.querySelector(".canvas-wrapper").appendChild(this.renderer.domElement),this.scene.fog=new THREE.Fog(this.fogConfig.color,this.fogConfig.near,this.fogConfig.far)}},{key:"createCamera",value:function(){this.camera=new THREE.PerspectiveCamera(20,this.width/this.height,1,1e3),this.camera.position.set(3,50,155),this.scene.add(this.camera)}},{key:"addCameraControls",value:function(){this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.enabled=!1}},{key:"addSpotLight",value:function(){var e=this,t={color:"#b1b1b1",x:100,y:150,z:100},i=this.gui.addFolder("Spot Light"),o=new THREE.SpotLight(t.color,1);i.addColor(t,"color").onChange((function(t){o.color=e.hexToRgbTreeJs(t)})),i.add(t,"x",-1e3,1e3).onChange((function(e){o.position.x=e})),i.add(t,"y",-1e3,1e3).onChange((function(e){o.position.y=e})),i.add(t,"z",-1e3,1e3).onChange((function(e){o.position.z=e})),o.position.set(t.x,t.y,t.z),o.castShadow=!0,this.scene.add(o)}},{key:"addAmbientLight",value:function(){var e=this,t={color:"#fff"},i=this.gui.addFolder("Ambient Light"),o=new THREE.AmbientLight(t.color);i.addColor(t,"color").onChange((function(t){o.color=e.hexToRgbTreeJs(t)})),this.scene.add(o)}},{key:"addBackgroundShape",value:function(){var e=this,t=new THREE.PlaneGeometry(400,100),i=new THREE.MeshPhysicalMaterial({color:"#fff"});this.backgroundShape=new THREE.Mesh(t,i),this.backgroundShape.position.y=10,this.backgroundShape.position.z=-150,this.scene.add(this.backgroundShape),this.mouseX=3,this.mouseY=50,this.lastMouseX=3,this.lastMouseY=50,window.addEventListener("mousemove",(function(t){e.mouseX=t.pageX,e.mouseY=t.pageY}))}},{key:"tilt",value:function(){var e=function(e,t,i){return(1-i)*e+i*t},t=function(e,t,i,o,n){var s=(e-t)/(i-o);return s*n+(t-s*o)};this.lastMouseX=e(this.lastMouseX,t(0,6,this.width,0,this.mouseX),.05),this.lastMouseY=e(this.lastMouseY,t(48,52,this.height,0,this.mouseY),.05),this.camera.position.set(this.lastMouseX,this.lastMouseY,155)}},{key:"addFloor",value:function(){var e=this,t={color:"#000"},i=new THREE.PlaneGeometry(200,200),o=new THREE.MeshStandardMaterial({color:t.color,metalness:0,emissive:"#000000",roughness:0}),n=new THREE.Mesh(i,o);i.rotateX(-Math.PI/2),n.position.y=0,this.scene.add(n),this.gui.addFolder("Floor").addColor(t,"color").onChange((function(t){o.color=e.hexToRgbTreeJs(t)}))}},{key:"animate",value:function(){this.tilt(),this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}},{key:"hexToRgbTreeJs",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255}:null}}])&&n(t.prototype,i),s&&n(t,s),e}();document.addEventListener("DOMContentLoaded",(function(){(new s).init()}))}]);