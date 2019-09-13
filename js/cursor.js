var touchArea = document.getElementById("ui");

var target = document.querySelector("#target");
var sceneA = document.getElementById("sceneA");
var sceneB = document.getElementById("sceneB");
var sceneC = document.getElementById("sceneC");

var obj1 =
  '<a-entity id="left" position="-0.47 0 0.47" scale="0.3 0.3 0.3" animation="property: rotation; to: 0 720 0; loop: false; dur: 1000; easing: easeOutCubic"><a-torus rotation="0 0 0" scale="0.3 0.3 0.3" radius-tubular="0.1" color="#ece8e5"></a-torus><a-cylinder position="0.58 0 0" rotation="0 0 0" scale="0.5 1.2 0.5" color="#ece8e5"></a-cylinder><a-cylinder position="0.58 0.06 0" rotation="0 0 0" scale="0.4 1.1 0.4" color="#3a211a"></a-cylinder></a-entity><a-entity id="right" scale="0.3 0.3 0.3" position="0.35 0 -0.18" rotation="0 0 0" animation="property: rotation; to: 0 570 0; loop: false; dur: 1000; easing: easeOutCubic"><a-torus rotation="0 0 0" scale="0.3 0.3 0.3" radius-tubular="0.1" color="#ece8e5"></a-torus><a-cylinder position="0.58 0 0" rotation="0 0 0" scale="0.5 1.2 0.5" color="#ece8e5"></a-cylinder><a-cylinder position="0.58 0.06 0" rotation="0 0 0" scale="0.4 1.1 0.4" color="#3a211a"></a-cylinder></a-entity>';
var obj2 =
  '<a-entity scale="0.3 0.3 0.3" animation="property: rotation; to: 0 720 0; loop: false; dur: 1000; easing: easeOutCubic"><a-torus radius-tubular="0.02" color="fbf0f0" radius="0.8"></a-torus><a-octahedron position="0 0.9 0" rotation="-90 0 0" scale="0.3 0.3 0.3" color="#ffb5b5"></a-octahedron></a-entity>';
var obj3 =
  '<a-entity scale="0.3 0.3 0.3" animation="property: rotation; to: 0 720 0; loop: false; dur: 1000; easing: easeOutCubic"><a-torus rotation="0 0 0" scale="0.3 0.3 0.3" radius-tubular="0.1" color="#ece8e5"></a-torus><a-cylinder position="0.58 0 0" rotation="0 0 0" scale="0.5 1.2 0.5" color="#ece8e5"></a-cylinder><a-cylinder position="0.58 0.07 0" rotation="0 0 0" scale="0.4 1.1 0.4" color="#3a211a"></a-cylinder></a-entity>';
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
