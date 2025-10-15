const more = document.getElementById("active");
const butt = document.getElementById("js-button-load");

const toggle = document.getElementById("drop-js");
const close = document.getElementById("close");
const drop = document.getElementById("dropdown");

butt.addEventListener("click", () => {
  more.classList.toggle("not_active");

  if (butt.innerHTML === "See More") {
    butt.innerHTML = "See less";
  } else if (butt.innerHTML === "See less") {
    butt.innerHTML = "See More";
  }
});

toggle.addEventListener("click", () => {
  drop.classList.add("active_drop");
});

close.addEventListener("click", () => {
  drop.classList.remove("active_drop");
});
