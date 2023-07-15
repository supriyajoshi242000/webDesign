var circle = document.getElementById("circle");
var upperbtn = document.getElementById("upperbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
var rotateSum;
upperbtn.onclick() = function() {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downbtn.onclick() = function() {
    rotateSum = rotateValue + "rotate(+90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}