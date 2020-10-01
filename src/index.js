/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import "./vars.css";
import "./pano.css";
import "./styles.css";
import "./libs.js";
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  var div = document.createElement("span");
  div.innerHTML =
    '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M256,0C114.616,0,0,114.616,0,256s114.616,256,256,256c141.394,0,256-114.616,256-256S397.394,0,256,0z M256,460.8 c-112.927,0-204.8-91.873-204.8-204.8S143.073,51.2,256,51.2S460.8,143.073,460.8,256S368.927,460.8,256,460.8z"/><path d="M349.112,238.08l-124.15-71.68c-17.07-9.851-31.037-1.792-31.037,17.92v143.36c0,19.712,13.967,27.781,31.037,17.92 l124.15-71.68C366.182,264.069,366.182,247.931,349.112,238.08z"/></svg>';
  hotSpotDiv.appendChild(div);
  div.style.width = div.scrollWidth - 20 + "px";
  div.style.marginLeft = -(div.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
  div.style.marginTop = -div.scrollHeight - 12 + "px";
}
var viewer = pannellum.viewer("panorama", {
  type: "equirectangular",

  panorama: window.panorama,
  autoLoad: true,
  showControls: false,
  hotSpots: [
    {
      pitch: 14.1,
      yaw: 1.5,
      cssClass: "custom-hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: "Baltimore Museum of Art"
    },
    {
      pitch: -9.4,
      yaw: 222.6,
      cssClass: "custom-hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: "Art Museum Drive"
    },
    {
      pitch: -0.9,
      yaw: 144.4,
      cssClass: "custom-hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: "North Charles Street"
    }
  ]
});
window.viewer = viewer;
// Make buttons work
document
  .getElementById("pano_nav_orbit_up")
  .addEventListener("click", function (e) {
    viewer.setPitch(viewer.getPitch() + 10);
  });
document
  .getElementById("pano_nav_orbit_down")
  .addEventListener("click", function (e) {
    viewer.setPitch(viewer.getPitch() - 10);
  });
document
  .getElementById("pano_nav_orbit_left")
  .addEventListener("click", function (e) {
    viewer.setYaw(viewer.getYaw() - 10);
  });
document
  .getElementById("pano_nav_orbit_right")
  .addEventListener("click", function (e) {
    viewer.setYaw(viewer.getYaw() + 10);
  });
document
  .getElementById("pano_nav_zoom_in")
  .addEventListener("click", function (e) {
    viewer.setHfov(viewer.getHfov() - 10);
  });
document
  .getElementById("pano_nav_zoom_out")
  .addEventListener("click", function (e) {
    viewer.setHfov(viewer.getHfov() + 10);
  });
document.getElementById("fullscreen").addEventListener("click", function (e) {
  viewer.toggleFullscreen();
});
const canvas = document.querySelector("#pano_nav_orbit_knob_box canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 22;
ctx.strokeStyle = "#bbb";
function draw(startAngle, endAngle) {
  ctx.clearRect(0, 0, 99, 200);
  ctx.beginPath();
  ctx.arc(49.5, 49.5, 37.5, startAngle, endAngle);
  ctx.stroke();
  ctx.closePath();
}

draw(0 * Math.PI, 0.5 * Math.PI);
viewer.on("load", () => {
  setTimeout(() => {
    document.body.classList.remove("loading");
  }, 2000);
});
viewer.on("animatefinished", ({ pitch, yaw, hfov }) => {});

const Slider = (parent, {min, max, value }, callback) => {
  let str = `<div id="pano_nav_zoom_view"> <div id="pano_nav_zoom_in" class="pano_tooltip pano_nav_btn"> <span class="pnav pnav_icon pnav_plus"></span> </div><div id="pano_nav_slider_shaft"> <span class="pnav pnav_graphic pnav_slider_shaft"></span> </div><div id="pano_nav_slider_elevator" class="" style="top: 50.1053px;" > <span class="pnav pnav_graphic pnav_slider_elevator"></span> </div><div id="pano_nav_shaft_catcher"></div><div id="pano_nav_zoom_out" class="pano_nav_btn"> <span class="pnav pnav_icon pnav_minus"></span> </div></div>`;
  parent.innerHTML = str;
  const shaft = parent.querySelector(".pano_nav_slider_shaft");
  const slider = parent.querySelector(".pano_nav_slider_elevator");

};
