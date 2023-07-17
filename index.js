const bgImgEl = document.getElementById("bg-image");
window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImgEl.style.opacity = 1 - window.pageYOffset / 800;
  console.log(window.pageYOffset, 1 - window.pageYOffset / 800);
  bgImgEl.style.backgroundSize = 160 - window.pageYOffset / 50 + "%";
}
