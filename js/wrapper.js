$(function() {
  $("#modal").fadeIn();
  $("#closeModal , #modalBg").click(function() {
    $("#modal").fadeOut();
  });
});

window.onload = function() {
  let objColor = ["#EA59F7", "#E046AB", "#FC4E69", "#A946E0", "#8E4EFC"];
  var fragment = document.createDocumentFragment();
  var scene = document.querySelector("a-scene");
  var wrapper = document.querySelector("#sphereWrapper");
  for (var i = 0; i < 180; i++) {
    var sphere = document.createElement("a-sphere");
    sphere.setAttribute("position", {
      x: Math.random() * 16 * 2 - 16,
      y: Math.random() * 4,
      z: Math.random() * 16 * 2 - 16
    });
    sphere.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });
    sphere.setAttribute("material", {
      /* roughness: 0.1 */
      metalness: 0.9
    });
    sphere.setAttribute(
      "color",
      objColor[Math.floor(Math.random() * objColor.length)]
    );
    fragment.appendChild(sphere);
  }
  wrapper.appendChild(fragment);
};
