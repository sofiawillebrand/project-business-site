// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  };
}

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle
// document.getElementById("section2").onclick = toggle
// document.getElementById("section3").onclick = toggle

let sections = document.getElementsByClassName("question")

for (let i=0; i < sections.length; i++) {
  sections[i].onclick = toggle;

}

// source for code: https://stackoverflow.com/a/62460881/7478955
let myVideo = document.getElementById("header-video");

myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});