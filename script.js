let colors = [
  "#7ed6df",
  "#e056fd",
  "#686de0",
  "#30336b",
  "#95afc0",
  "#f9ca24",
  "#f0932b",
  "#eb4d4b",
  "#6ab04c",
  "#c7ecee",
];
const body = document.body;

function changeColor() {
  //console.log("I was clicked!");
  body.style.background = randomColor();
}

function randomColor() {
  const num = Math.floor(Math.random() * Math.floor(10));

  return colors[num];
}
