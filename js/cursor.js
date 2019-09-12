let start = false;
// const cursor = document.getElementById("cursor");
// const target = document.getElementById("target");
var target = document.querySelector("#target");
//タップが出来る場合（SP・タブレットなど）
if (window.ontouchstart === null) alert("タッチ");
//クリックしかできない場合（PCなど）
if (window.ontouchstart === undefined) alert("クリック");

let shape =
  '<a-dodecahedron scale="0.6 0.6 0.6" position="0 0 0" rotation="0 0 0" shadow="receive: false" material="color: white; wireframe: true" animation="property: rotation; to: 0 0 1000; loop: false; dur: 1000; easing: easeOutCubic"></a-dodecahedron><a-sky id="sky" radius="20" theta-length="100" material="color: black;" rotation="-180 0 0" scale="0.01 0.01 0.01" animation="property: scale; to: 0.5 0.5 0.5; loop: false; dur: 1000;"></a-sky>';

target.addEventListener("click", function(evt) {
  evt.preventDefault();
  start = true;
  if (start) {
    console.log("click");
    target.innerHTML = shape;
    start = false;
  }
  target.removeEventListener(evt);
});
