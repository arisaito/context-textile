let start = false;
// const cursor = document.getElementById("cursor");
const target = document.getElementById("target");

let shape =
  '<a-dodecahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" shadow="receive: false" material="color: white; wireframe: true" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic"></a-dodecahedron><a-sky id="sky" radius="20" theta-length="100" material="color: black;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.5 0.5 0.5; loop: false; dur: 1000;"></a-sky>';

document.querySelector("#target").addEventListener("touchstart", function (evt) {
  start = true;
  if (start) {
    console.log("touch");
    target.innerHTML = shape;
    setTimeout(function scene2() {
      console.log("シーン2発火")
    }, 5000);
    setTimeout(function scene3() {
      console.log("シーン3発火")
    }, 10000);
    start = false;
    this.removeEventListener(evt);
  }
});
