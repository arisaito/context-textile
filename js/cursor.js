var touchArea = document.getElementById("ui");

var target = document.querySelector("#target");
var sceneA = document.getElementById("sceneA");
var sceneB = document.getElementById("sceneB");
var sceneC = document.getElementById("sceneC");

var obj1 =
  '<a-dodecahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" shader="flat" material="color: white; wireframe: true" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic"></a-dodecahedron>';
var obj2 =
  '<a-octahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" material="color: skyblue;" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic"></a-octahedron>';
var obj3 =
  '<a-dodecahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" shader="flat" material="color: black; wireframe: true" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic;"></a-dodecahedron>';
var obj4 =
  '<a-dodecahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" material="color: black;" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic;"></a-dodecahedron>';

var scene1 =
  '<a-sky id="sky" position="0 0 0" radius="20" theta-length="100" material="color: black;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.7 0.7 0.7; loop: false; dur: 1000;"></a-sky>';
var scene2 =
  '<a-sky id="sky" position="0 0 0" radius="20" theta-length="100" material="color: pink;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.6 0.6 0.6; loop: false; dur: 1000;"></a-sky>';
var scene3 =
  '<a-sky id="sky" position="0 0 0" radius="20" theta-length="100" material="color: white;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.5 0.5 0.5; loop: false; dur: 1000;" animation__2="property: position; begin: 3000; to: 0 0 3; dur: 1000; loop: false;"></a-sky>';

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
  }, 6000);
  setTimeout(function sceneEvt4() {
    console.log("シーン4発火");
    target.innerHTML = obj4;
    $(sceneA).remove();
    $(sceneB).remove();
    $(sceneC).remove();
  }, 9000);
});

// if (flag === true) {
//   console.log("flagがtrueになったよ");
// }

//     var marker = this.el;

//     marker.addEventListener("markerFound", function() {
//       var markerId = marker.id;
//       console.log("marker get", markerId);

//       setTimeout(function sceneAevt() {
//         console.log("シーンA");
//         target.innerHTML = sceneA;
//       }, 3000);
//     });
//   }
// });
// event.preventDefault();
// target.innerHTML = sceneA;
// setTimeout(function scene2() {
//   console.log("シーン2発火");
// }, 5000);
// setTimeout(function scene3() {
//   console.log("シーン3発火");
// }, 10000);
// start = false;
// }
// });
//   }
// })
