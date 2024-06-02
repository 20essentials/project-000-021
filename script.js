console.groupCollapsed("REFERENCE: ");
console.log("video 1 ->", "https://www.pexels.com/video/fishes-inside-a-transparent-aquarium-4068638/");
console.log("video 2 ->", "https://www.pexels.com/video/underwater-view-of-fish-in-aquarium-12049621/");
console.groupEnd();

const d = document,
  w = window;

d.addEventListener("DOMContentLoaded", e => {
  responsiveMedia("(min-width: 700px) and (orientation: landscape)");
})

setInterval(function() {cargarBurbujas(".myAside1")}, 800);
setInterval(function() {cargarBurbujas(".myAside2")}, 800);


function cargarBurbujas(elAside) {
  let $aside = d.querySelector(elAside);

  for (let i = 0; i < 50; i++) {
    let $i = d.createElement("i");

    let getRandomPosition = (n) => {
      return `${Math.random() * n + 30}px`
    }

    $i.style.setProperty("--x", getRandomPosition($aside.scrollWidth));
    $i.style.setProperty("--y", getRandomPosition($aside.scrollHeight));

    $aside.appendChild($i);

    setTimeout(() => $aside.removeChild($i), 3000);
  }
}

function responsiveMedia(mediaQuery) {
  let $video = d.querySelector("video");
  let $breakPoint = w.matchMedia(mediaQuery);

  let responsive = (e) => {
    if (e.matches) {
      $video.poster = "assets/poster1.avif";
      d.body.style.backgroundImage = `url('assets/poster1.avif')`;
      $video.src = "video1.mp4";
    }
    else {
      $video.poster = "assets/poster2.avif";
      d.body.style.backgroundImage = `url('assets/poster1.avif')`;
      $video.src = "video2.mp4";
    }
  }

  $breakPoint.addListener(responsive);
  responsive($breakPoint);
}