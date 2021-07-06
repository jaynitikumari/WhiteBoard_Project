function _(selector){
  return document.querySelector(selector);
}
function setup(){
  let canvas = createCanvas(1536, 728);
  canvas.parent("canvas-wrapper");
   defaultbg();
}

// function myFunction() {
  //   document.body.style.backgroundColor = "red";
// }
// function myFunction2() {
//   document.body.style.backgroundColor = "white";
// }
function mouseDragged() {
  // let type = _("#pen-pencil").checked?"pencil":"brush";
  let type;
  if (_("#pen-pencil").checked) {
    type = "pencil"
  }
  else if (_("#pen-brush").checked) {
    type = "brush"
  }
  else {
    type = "eraser"
  }
  // let method =_("#pen-eraser").checked?"eraser":"pencil";
  let size = parseInt(_("#pen-size").value) || 10;
  let color = _("#pen-color").value;
  fill(color);
  stroke(color);
  if (type == "pencil") {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  else if (type == "brush") {
    ellipse(mouseX, mouseY, size, size);
  }
  // else if(method == "eraser"){
  //   ellipse(mouseX, mouseY, size, size);
  // }
  else {
    const bgcolor = document.getElementById("body")
    // console.log(bgcolor.style.cssText)
    size = parseInt(_("#pen-size").value) || 10;
    color = bgcolor.style.backgroundColor;
    fill(color);
    stroke(color);
    ellipse(mouseX, mouseY, size, size);
  }
}

_("#reset-canvas").addEventListener("click", function(){
  background(255);
});
_("#save-canvas").addEventListener("click",function(){
  saveCanvas(canvas, "sketch", "png");
});

  let colorpicker=document.querySelector("#base");
  colorpicker.addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
  
  function defaultbg() {
    document.body.style.backgroundColor = "white";
  }
  function myFunction1() {
  document.body.style.backgroundColor = "red";
  }
  function myFunction2() {
    document.body.style.backgroundColor = "orange";
  }
  function myFunction3() {
    document.body.style.backgroundColor = "yellow";
  }
  function myFunction4() {
    document.body.style.backgroundColor = "blue";
  }
  function myFunction5() {
    document.body.style.backgroundColor = "green";
  }
  function myFunction6() {
    document.body.style.backgroundColor = "purple";
  }
  function myFunction7() {
    document.body.style.backgroundColor = "black";
  }




