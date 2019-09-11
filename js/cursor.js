let start = false;
const cursor = document.getElementById("cursor");
const target = document.getElementById("target");

let shape = [
  '<a-icosahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" material="color: white; wireframe: true"></a-icosahedron>',
  '<a-icosahedron color="#fee981" animation="property: rotation; to: 0 360 0; loop: false; dur: 1000; easing: easeOutCubic"></a-icosahedron>',
  '<a-box rotation="30 30 0" color="skyblue" animation="property: rotation; to: 0 360 0; loop: false; dur: 1000; easing: easeOutCubic"></a-box>'
];
let lastIndex = -1;

// let colors = ["pink", "lightgreen", "lightbrue"];

document.querySelector("#target").addEventListener("click", function(evt) {
  start = true;
  if (start) {
    console.log("click");
    lastIndex = (lastIndex + 1) % shape.length;
    target.innerHTML = shape[lastIndex];
    start = false;
  }
});
