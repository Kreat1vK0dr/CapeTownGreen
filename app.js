
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
var positionlight = [".one-of-nine",".two-of-nine", ".three-of-nine", ".four-of-nine", ".five-of-nine", ".six-of-nine", ".seven-of-nine", ".eight-of-nine", ".nine-of-nine"];



var taxiLocationCounter = 1;

var createLocationClass = function(x) {
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

var createTrafficLightClass = function(x) {
  switch (x) {
    case 1: return positionlight[0];
    case 2: return positionlight[1];
    case 3: return positionlight[2];
    case 4: return positionlight[3];
    case 5: return positionlight[4];
    case 6: return positionlight[5];
    case 7: return positionlight[6];
    case 8: return positionlight[7];
    case 9: return positionlight[8];
    default: return "";
  }
};


var moveTaxi = function(from, to) {
  var taxi = document.querySelector('.taxi');
  taxi.classList.remove(from);
  taxi.classList.add(to);
};

var moveForward = function() {
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter++;

  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);
};

var moveBackward = function() {
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter--;

  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);
};


/*
var getTaxiClasss = function (currentIndex) {
var position = ["slot-one-of-nine","slot-two-of-nine", "slot-three-of-nine", "slot-four-of-nine", "slot-five-of-nine", "slot-six-of-nine", "slot-seven-of-nine", "slot-eight-of-nine", "slot-nine-of-nine"];
return position[currentIndex - 1];
};
*/
var test = true;

function TrafficLight(x) {
  console.log(x);
  var className = createTrafficLightClass(x);
  console.log(className);
  var trafficLightElement = document.querySelector(className);
  console.log(trafficLightElement.classList);
  test = trafficLightElement.classList;
  this.makeGreen = function () {
    trafficLightElement.classList.remove("lights-stop");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.add("lights-go");
  };
  this.makeOrange = function () {
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-stop");
    trafficLightElement.classList.add("lights-slowdown");
  };
  this.makeRed = function () {
    // trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.add("lights-stop");
  };
  this.color = function () {
    if (trafficLightElement.classList.contains("lights-go")) {
      return "green";
    } else if (trafficLightElement.classList.contains("lights-slowdown")) {
      return "orange";
    } else if (trafficLightElement.classList.contains("lights-stop")) {
      return "red";
    }
  };
}

var redLightBehind = function() {
      var classBehind  = null;
      var positionBehind = taxiLocationCounter - 1;
      if(positionBehind > 0) {
        classBehind = createTrafficLightClass(positionBehind);
        if(document.querySelector(classBehind).classList.contains("lights-stop")) {
    // var trafficLightBehind = new TrafficLight(positionBehind);
    // if (trafficLightBehind.color()==="red")
        return true;
      } else {
        return false;
      }
    } else if (taxiLocationCounter===1){
        classBehind = createTrafficLightClass(9);
        if (document.querySelector(classBehind).classList.contains("lights-stop")) {
            return true;
          } else {
              return false;
            }
          }
        };

var lightcolor =1;
// var previousLight = new TrafficLight(taxiLocationCounter-1);
// var lightchangeUp = function(keycode) {
//
//
//   }
// }
var lightposition = function(object, x) {
  switch (x) {
    case 1 : object.makeGreen();
    break;
    case 2 : object.makeOrange();
    break;
    case 3 : object.makeRed();
    break;
    default: return false;
    break;
  }
};

var canIMoveForward = function(object) {
        if (object.color()==="green" ||object.color()==="orange") {
                      return true;
                } else if (object.color()==="red") {
                  return false;
                }
              };

var canIMoveBackward = function() {
      if(redLightBehind()===true) {
        return false;
      } else {
        return true;
      }
};

var resetLightCounter = function(x) {
  var lightClass = createTrafficLightClass(x);
  var lightClassElement = document.querySelector(lightClass);
  if (lightClassElement.classList.contains("lights-go")) {
    lightcolor = 1;
  } else if (lightClassElement.classList.contains("lights-slowdown")) {
    lightcolor = 2;
  } else if (lightClassElement.classList.contains("lights-stop")) {
    lightcolor = 3;
  }
};

body.onkeydown = function(e){
  console.log(redLightBehind());
  var trafficLight = new TrafficLight(taxiLocationCounter);
  // var locationBehind = taxiLocationCounter - 1;
  // var lightBehind = null;
  //
  // if (locationBehind > 0){
  //   lightBehind = new TrafficLight(locationBehind)
  // }

  if (e.keyCode===38) {
    if (lightcolor<3) {
      lightcolor++;
      lightposition(trafficLight, lightcolor);
    // else
    //   lightposition(trafficLight, lightcolor);
    //
  }
} else if (e.keyCode===40) {
      if (lightcolor>1){
    lightcolor--;
    lightposition(trafficLight, lightcolor);
    // trafficLight.makeGreen();
    }
  } else if (e.keyCode === 39) {

      if (taxiLocationCounter < 9) {
        if(canIMoveForward(trafficLight)===true) {
        moveForward();
        console.log(test);
        resetLightCounter(taxiLocationCounter);
      } else {
        taxiLocationCounter = taxiLocationCounter;
      }
    } else {
        taxiLocationCounter = 1;
        moveTaxi(position[position.length - 1], position[0]);

      }
    } else if (e.keyCode === 37) {

      if (taxiLocationCounter > 1) {
        if (canIMoveBackward()===true) {
          console.log(redLightBehind());

         moveBackward();
         resetLightCounter(taxiLocationCounter);
       } else {
              taxiLocationCounter = taxiLocationCounter;
       }
      } else {
          taxiLocationCounter = 9;
          moveTaxi(position[0],position[8]);

        }
      }
      console.log(test);
      displayMessage(createLocationClass(taxiLocationCounter)+" "+lightcolor;//createTrafficLightClass(taxiLocationCounter) //createLocationClass(taxiLocationCounter) /*keyCodeName(x)*/ )//taxiLocationCounter //lightcolor);
};
