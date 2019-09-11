let start = false;
const cursor = document.getElementById("cursor");
const target = document.getElementById("target");

let shape =
  '<a-dodecahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" shadow="receive: false" material="color: white; wireframe: true" animation="property: rotation; to: 0 360 0; loop: false; dur: 1000; easing: easeOutCubic"></a-dodecahedron><a-sky id="sky" radius="20" theta-length="100" material="color: black;" rotation="-90 0 0" scale="-0.5 0.5 0.5"></a-sky>';

document.querySelector("#target").addEventListener("click", function(evt) {
  start = true;
  if (start) {
    console.log("click");
    target.innerHTML = shape;
    start = false;
  }
});
