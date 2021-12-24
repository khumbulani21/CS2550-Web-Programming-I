
function moveCircle() {
  var elem = document.getElementById("animate");   
  var positionOfCircle = 0;
  var interval = setInterval(frame, 5);
  function frame() {
    if (positionOfCircle == 400) {
      clearInterval(interval);
    } else {
      positionOfCircle=positionOfCircle+1; 
      elem.style.top = positionOfCircle + 'px'; 
      elem.style.left = positionOfCircle + 'px'; 
    }
  }
}
//END OF ANIMATION