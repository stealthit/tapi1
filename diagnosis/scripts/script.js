// circle progress bar
function circleProgress(RADIUS, bar, per) {
  var CIRCUMFERENCE = 2 * Math.PI * RADIUS;    
  var progress = per / 100;
  var dashoffset = CIRCUMFERENCE * (1 - progress);    
  bar.style.strokeDashoffset = dashoffset;
  bar.style.strokeDasharray = CIRCUMFERENCE;    
}