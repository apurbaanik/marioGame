var mario = document.getElementById("mario");
var green = document.getElementById("block");

function start(){
  green.classList.add("animate2");
}

function jump(){
    mario.classList.add("animate");
    setTimeout(function(){
        mario.classList.remove("animate");
    },400);
}
