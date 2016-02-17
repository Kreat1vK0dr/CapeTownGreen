
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

//listen for the keydown event(
body.onkeydown = function(e){
    //e.keyCode - will capture the key code
    //displayMessage(e.keyCode);
};
var keyCodeName = function(keyCode) {
    switch (keyCode) {
      case 37: return "left";
      case 38: return "up";
      case 39: return "right";
      case 40: return "down";
      default: return "";
      }
    };
