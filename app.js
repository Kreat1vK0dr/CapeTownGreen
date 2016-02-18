
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
//adding function displayMessage (copied from support.js)

var keyCodeName = function(keyCode) {
    switch (keyCode) {
      case 37: return "left";
      case 38: return "up";
      case 39: return "right";
      case 40: return "down";
      default: return "";
      }
    };

var position = ["slot-one-of-nine","slot-two-of-nine", "slot-three-of-nine", "slot-four-of-nine", "slot-five-of-nine", "slot-six-of-nine", "slot-seven-of-nine", "slot-eight-of-nine", "slot-nine-of-nine"];



var taxiLocationCounter = 1;

var createLocactionClass = function(x) {
    switch (x) {
      case 1: return position[0];
      case 2: return position[1];
      case 3: return position[2];
      case 4: return position[3];
      case 5: return position[4];
      case 6: return position[5];
      case 7: return position[6];
      case 8: return position[7];
      case 9: return position[8];
      default: return "";
    }
};

var moveTaxi = function(from, to) {
  var taxi = document.querySelector('.taxi');
    taxi.classList.remove(from);
    taxi.classList.add(to);
};

var moveForward = function() {
  var currentLocation = createLocactionClass(taxiLocationCounter);
  taxiLocationCounter++;
  var newLocation = createLocactionClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);
  };

var moveBackward = function() {
  var currentLocation = createLocactionClass(taxiLocationCounter);
  taxiLocationCounter--;
  var newLocation = createLocactionClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);
};


/*
var getTaxiClasss = function (currentIndex) {
    var position = ["slot-one-of-nine","slot-two-of-nine", "slot-three-of-nine", "slot-four-of-nine", "slot-five-of-nine", "slot-six-of-nine", "slot-seven-of-nine", "slot-eight-of-nine", "slot-nine-of-nine"];
    return position[currentIndex - 1];
};
*/


//listen for the keydown event(
body.onkeydown = function(e){
  if (e.keyCode === 39) {
    if (taxiLocationCounter > 0 && taxiLocationCounter < 9) {
      moveForward();
        } else {
            taxiLocationCounter = 1;
            moveTaxi(position[position.length - 1], position[0]);
          }
    } else if (e.keyCode === 37) {
        if (taxiLocationCounter > 1 && taxiLocationCounter < 10) {
       moveBackward();
     } else {
       taxiLocationCounter = 9;
        moveTaxi(position[0],position[8]);
     }
    }
    displayMessage(createLocactionClass(taxiLocationCounter)/*keyCodeName(x)*/ /*taxiLocationCounter*/);
};
