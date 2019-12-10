window.onload = function() {
  document.getElementById("hello-sample").onclick = sayHelloStaff;
  document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
  document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
  document.getElementById("triangle-sample").onclick = drawTriangleStaff;
  document.getElementById("smile-sample").onclick = drawFaceStaff;
  document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

  document.getElementById("hello").onclick = sayHello;
  document.getElementById("rectangle").onclick = drawRectangle;
  document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
  document.getElementById("triangle").onclick = drawTriangle;
  document.getElementById("smile").onclick = drawFace;
  document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  const canvas=document.getElementById("student-canvas-1")
  const ctx=canvas.getContext("2d")

  let text=prompt("Message")

  if (text === null) {
    ctx.clearRect(0,0, canvas.width, canvas.height)
  }

  while (text.length > 50) {
    alert("Your message is too long. Keep it under 50 characters.")
    text=prompt("Message:")
  }

  ctx.font = "48px Sans-serif"
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.strokeText(text,30,70, canvas.width - 30)
};

/*
 * Exercise 2.
*/

const drawRectangle = function() {

};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {

};

/*
 * Exercise 5.
 */

const drawFace = function() {

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};
