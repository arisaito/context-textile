var touchArea = document.getElementById("ui");

var target = document.querySelector("#target");
var sceneA = document.getElementById("sceneA");
var sceneB = document.getElementById("sceneB");
var sceneC = document.getElementById("sceneC");

var obj1 =
  '<a-entity position="0 0 -3" scale="0.05 0.05 0.05" animation="property: rotation; to: 0 0 720; loop: false; dur: 1000; easing: easeOutCubic"><a-obj-model rotation="-90 0 0" src="#cup3-obj" material="color: #fff8a6"></a-obj-model></a-entity>';
var obj2 =
  '<a-octahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" material="color: #ffcbcb;" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic"></a-octahedron>';
var obj3 =
  '<a-entity scale="0.05 0.05 0.05" animation="property: rotation; to: 0 0 720; loop: false; dur: 1000; easing: easeOutCubic"><a-obj-model src="#cup3-obj" mtl="#cup3-mtl"></a-obj-model></a-entity>';
var obj4 =
  '<a-dodecahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" material="color: black;" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic;" animation__2="property: scale; to: 0 0 0; dur: 1000"></a-dodecahedron>';

var scene1 =
  '<a-sky id="sky" position="0 0 0" radius="20" theta-length="100" material="color: #f59292;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.7 0.7 0.7; loop: false; dur: 1000;"></a-sky>';
var scene2 =
  '<a-sky id="sky" position="0 0 0" radius="20" theta-length="100" material="color: #132742;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.6 0.6 0.6; loop: false; dur: 1000;"></a-sky>';
var scene3 =
  '<a-sky id="sky" position="0 0 0" radius="20" theta-length="100" material="color: #7c7575;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.5 0.5 0.5; loop: false; dur: 1000;" animation__2="property: position; begin: 3000; to: 0 0 3; dur: 1000; loop: false;"></a-sky>';

touchArea.addEventListener("touchstart", e => {
  event.preventDefault();
  $(touchArea).remove();
  target.innerHTML = obj1;
  sceneA.innerHTML = scene1;

  setTimeout(function sceneEvt2() {
    console.log("シーン2発火");
    target.innerHTML = obj2;
    sceneB.innerHTML = scene2;
  }, 3000);
  setTimeout(function sceneEvt3() {
    console.log("シーン3発火");
    target.innerHTML = obj3;
    sceneC.innerHTML = scene3;
    $(sceneA).remove();
  }, 6000);
  setTimeout(function sceneEvt4() {
    console.log("シーン4発火");
    target.innerHTML = obj4;
    $(sceneB).remove();
    $(sceneC).remove();
  }, 9000);
});
