
const parallax = document.querySelector('.parallax');
const parallaxWidth = document.documentElement.clientWidth;

document.addEventListener("DOMContentLoaded", () => {
    if(parallaxWidth < 768) {
        parallax.style.display = "none";
    } else {
        parallax.style.display = "block";
    }
});

/* window.onresize = function(){
    if(parallaxWidth < 768) {
        parallax.style.display = "none";
    } else {
        parallax.style.display = "block";
    }
}; */

