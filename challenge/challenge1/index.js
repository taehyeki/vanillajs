// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");
console.log(h2);
const superEventHandler = {
  mouseOvered: () => {
    h2.style.color = colors[0];
  },
  mouseLeaved: () => {
    h2.style.color = colors[1];
  },
  windowResized: () => {
    h2.style.color = colors[2];
  },
  rightCliked: () => {
    h2.style.color = colors[3];
  },
};
h2.addEventListener("mouseover", superEventHandler.mouseOvered);
h2.addEventListener("mouseleave", superEventHandler.mouseLeaved);
window.addEventListener("resize", superEventHandler.windowResized);
h2.addEventListener("contextmenu", superEventHandler.rightCliked);
