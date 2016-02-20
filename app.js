var randomNumber = function(range){
  return Math.floor(Math.random() * range);
};

var moneyIndex = {
    0 : 5,
    1 : 10,
    2 : 20
  };

var passengerList = function(){

  var maxNumber = randomNumber(40);
  var passengers = [];
  for(var i=0;i<maxNumber;i++){
    var random = randomNumber(3) ;
    passengers.push(moneyIndex[random]);
  }

  return passengers;
};


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
  // console.log(x);
  var className = createTrafficLightClass(x);
  // console.log(className);
  var trafficLightElement = document.querySelector(className);
  // console.log(trafficLightElement.classList);
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
var elementQFirst = document.querySelector('.queue-first');
var elementQSecond = document.querySelector('.queue-second');
var elementQThird = document.querySelector('.queue-third');

// console.log(document.querySelector('.queue-first').classList);

function changeColorFive() {
  elementQFirst.classList.add('active');
  elementQFirst.classList.remove('inactive');
  elementQSecond.classList.remove('active');
  elementQSecond.classList.add('inactive');
  elementQThird.classList.remove('active');
  elementQThird.classList.add('inactive');
  console.log(document.querySelector('.queue-first').classList);
  console.log(document.querySelector('.queue-second').classList);
  console.log(document.querySelector('.queue-third').classList);
}
function changeColorTen() {
  elementQSecond.classList.add('active');
  elementQSecond.classList.remove('inactive');
  elementQFirst.classList.remove('active');
  elementQFirst.classList.add('inactive');
  elementQThird.classList.remove('active');
  elementQThird.classList.add('inactive');
  console.log(document.querySelector('.queue-first').classList);
  console.log(document.querySelector('.queue-second').classList);
  console.log(document.querySelector('.queue-third').classList);
}
function changeColorTwenty() {
  elementQThird.classList.add('active');
  elementQThird.classList.remove('inactive');
  elementQSecond.classList.remove('active');
  elementQSecond.classList.add('inactive');
  elementQFirst.classList.remove('active');
  elementQFirst.classList.add('inactive');
  console.log(document.querySelector('.queue-first').classList);
  console.log(document.querySelector('.queue-second').classList);
  console.log(document.querySelector('.queue-third').classList);
}
function changeColorBody() {
  elementQFirst.classList.remove('active');
  elementQFirst.classList.add('inactive');
  elementQSecond.classList.remove('active');
  elementQSecond.classList.add('inactive');
  elementQThird.classList.remove('active');
  elementQThird.classList.add('inactive');
  console.log(document.querySelector('.queue-first').classList);
  console.log(document.querySelector('.queue-second').classList);
  console.log(document.querySelector('.queue-third').classList);
}

// console.log(document.getElementById('queue-ten-rand').classList);

var displayQueueCountFive = function(val){
    var q = document.getElementById('queue-five-rand');
    q.innerHTML = val;
};
var displayQueueCountTen = function(val){
    var q = document.getElementById('queue-ten-rand');
    q.innerHTML = val;
};
var displayQueueCountTwenty = function(val){
    var q = document.getElementById('queue-twenty-rand');
    q.innerHTML = val;
};

var displayQueues = function (array) {
  if (five===true) {
  displayQueueCountFive(array[0]);
  fiveCount = array[0];
  fiveRem = array[0];

} else {
  displayQueueCountFive(0);
  fiveCount = 0;
  fiveRem = 0;
  }

if (ten===true) {
  if (five===true) {
  displayQueueCountTen(array[1]);
  tenCount = array[1];
  tenRem = array[1];
} else {
  displayQueueCountTen(array[0]);
  tenCount = array[0];
  tenRem = array[0];
}
} else if (five===true){displayQueueCountTen(0);
  tenCount = 0;
  tenRem = 0;
}

if (twenty===true) {
  if (ten===true && five===true) {
    displayQueueCountTwenty(array[2]);
    twentyCount = array[2];
    twentyRem = array[2];
  } else {
      displayQueueCountTwenty(array[1]);
      twentyCount = array[1];
      twentyRem = array[1];
  }
} else {
  displayQueueCountTwenty(0);
  twentyCount = 0;
  twentyRem = 0;
}
console.log(fiveCount);
console.log(tenCount);
console.log(twentyCount);
};

var five;
var ten;
var twenty;
var fiveCount;
var tenCount;
var twentyCount;
var fiveRem;
var tenRem;
var twentyRem;


var createQueues = function () {
  var queueCount = [];
  var passengers = passengerList().sort(function(a,b){return a-b;});
  var prev =0;
  for (i=0;i<passengers.length;i++) {
    if (passengers[i] !== prev) {
      queueCount.push(1);
      if (passengers[i]===5) {
        five = true;
      } else if (passengers[i]===10) {
        ten = true;
      } else if (passengers[i]===20) {
        twenty = true;
      }
      } else {
      queueCount[queueCount.length-1]++;
    } prev = passengers[i];

  //  displayQueues(queueCount);
} console.log(queueCount);
displayQueues(queueCount);
};


var displayTaxiPassengerCountFive = function(count){
    var q = document.querySelector(".five-rand");
    q.innerHTML = count;
};
var displayTaxiPassengerCountTen = function(count){
    var q = document.querySelector(".ten-rand");
    q.innerHTML = count;
};
var displayTaxiPassengerCountTwenty = function(count){
    var q = document.querySelector(".twenty-rand");
    q.innerHTML = count;
};

// displayMessage("Press R to randomly fill the queue with passengers");
var taxiCountFive =0;
var taxiCountTen = 0;
var taxiCountTwenty = 0;

console.log(fiveRem);



body.onkeydown = function(e){
  // console.log(redLightBehind());
  // console.log(document.querySelector('.taxi').classList

  var trafficLight = new TrafficLight(taxiLocationCounter);
if(e.keyCode===82) {
createQueues();

  displayMessage(e.keyCode);
} else {
  displayMessage("error");
}

if (document.querySelector('.taxi').classList.contains('slot-one-of-nine')) {
  if (elementQFirst.classList.contains('active')) {
    if (e.keyCode===107 && fiveCount>0) {
    taxiCountFive++;
    fiveCount--;
    displayTaxiPassengerCountFive(taxiCountFive);
    displayQueueCountFive(fiveCount);
    console.log(fiveRem);
  } if (e.keyCode===109 && fiveCount<fiveRem) {
    taxiCountFive--;
    fiveCount++;
    displayTaxiPassengerCountFive(taxiCountFive);
    displayQueueCountFive(fiveCount);
  }
} else if (elementQSecond.classList.contains('active')) {
  if (e.keyCode===107 && tenCount>0) {
  taxiCountTen++;
  tenCount--;
  displayTaxiPassengerCountTen(taxiCountTen);
  displayQueueCountTen(tenCount);
  console.log(twentyRem);
} if (e.keyCode===109 && tenCount<tenRem) {
  taxiCountTen--;
  tenCount++;
  displayTaxiPassengerCountTen(taxiCountTen);
  displayQueueCountTen(tenCount);
}
  } else if (elementQThird.classList.contains('active')) {
    if (e.keyCode===107 && twentyCount>0) {
    taxiCountTwenty++;
    twentyCount--;
    displayTaxiPassengerCountTwenty(taxiCountTwenty);
    displayQueueCountTwenty(twentyCount);
    console.log(twentyRem);
  } if (e.keyCode===109 && twentyCount<twentyRem) {
    taxiCountTwenty--;
    twentyCount++;
    displayTaxiPassengerCountTwenty(taxiCountTwenty);
    displayQueueCountTwenty(twentyCount);
  }
}
}

  if (e.keyCode===38) {
    if (lightcolor<3) {
      lightcolor++;
      lightposition(trafficLight, lightcolor);
  }
} else if (e.keyCode===40) {
      if (lightcolor>1){
    lightcolor--;
    lightposition(trafficLight, lightcolor);
    }
  } else if (e.keyCode === 39) {


      if (taxiLocationCounter < 9) {
        if(canIMoveForward(trafficLight)===true) {
        moveForward();
        // console.log(test);
        resetLightCounter(taxiLocationCounter);
      }
    } else if (canIMoveForward(trafficLight)===true) {
        taxiLocationCounter = 1;
        moveTaxi(position[position.length - 1], position[0]);
      }
    } else if (e.keyCode === 37) {

      if (taxiLocationCounter > 1) {
        if (canIMoveBackward()===true) {
         moveBackward();
         resetLightCounter(taxiLocationCounter);
      }
    } else if (canIMoveBackward()===true) {
      taxiLocationCounter = 9;
      moveTaxi(position[0],position[8]);
    }
  }
  console.log(document.querySelector('.taxi').classList);
      // console.log(test);
      // displayMessage(createLocationClass(taxiLocationCounter)+" "+lightcolor);//createTrafficLightClass(taxiLocationCounter) //createLocationClass(taxiLocationCounter) /*keyCodeName(x)*/ )//taxiLocationCounter //lightcolor);
};
