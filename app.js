var randomNumber = function(range){
  return Math.floor(Math.random() * range);
};
// something
var moneyIndex = {
    0 : 5,
    1 : 10,
    2 : 20
  };

  var changeTaxiPassengers = function (array) {
    displayTaxiPassengerCountFive(array[0]);
    displayTaxiPassengerCountTen(array[1]);
    displayTaxiPassengerCountTwenty(array[2]);
  };

  var moveTaxi = function(from, to) {
      var taxi = document.querySelector('.taxi');
      taxi.classList.remove(from);
      taxi.classList.add(to);
  };

  var displayMessage = function(text){
      var message = document.getElementById("message");
      message.innerHTML = text;
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
  // test = trafficLightElement.classList;
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
  if (five===true && typeof array[0]==='number') {
  displayQueueCountFive(array[0]);
  fiveCount = array[0];
  fiveRem = array[0];

} else {
  displayQueueCountFive(0);
  fiveCount = 0;
  fiveRem = 0;
  }

if (ten===true && (typeof array[0]==='number' && typeof array[1]==='number')) {
  if (five===true ) {
  displayQueueCountTen(array[1]);
  tenCount = array[1];
  tenRem = array[1];
} else {
  displayQueueCountTen(array[0]);
  tenCount = array[0];
  tenRem = array[0];
}
} else if (five===true){
  displayQueueCountTen(0);
  tenCount = 0;
  tenRem = 0;
}

if (twenty===true && five===true && (typeof array[1]==='number' && typeof array[2]==='number')) {
  if (ten===true) {
    displayQueueCountTwenty(array[2]);
    twentyCount = array[2];
    twentyRem = array[2];
  } else if(typeof array[1]==='number') {
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

$(document).ready(function(){
    $('#resume').hide();
    $('#pause').click(function(){
      $('#resume').show();
      $('#pause').hide();
    });
    $('#resume').click(function(){
      $('#pause').show();
      $('#resume').hide();
    });
});

// displayMessage("Press R to randomly fill the queue with passengers");
var taxiCountFive =0;
var taxiCountTen = 0;
var taxiCountTwenty = 0;

console.log(fiveRem);

// var count;
// function countDown(x) {
//   count = x*100;
// }
//
// // countDown(15);
//
// function startTimer() {
// var counter = setInterval(timer, 10); //10 will  run it every 100th of a second
// countDown(15);
// function timer() {
//     if (count <= 0)
//     {
//         clearInterval(counter);
//         return;
//      }
//      count--;
//   var secmilli = count/100;
//   var sm = secmilli.toString();
//   var split = sm.split(".");
//   if (split[0]<10) {
//     split[0] = '0'+split[0];
//   }
//   if (split[1]<10 && split[1].length<2) {
//     split[1] = split[1]+"0";
//   }
//   if (typeof split[1]=== 'undefined') {
//     split[1] = "00";
//   }
//
//   // if (split[1]<10) {
//   //   split[1] = split[1]+"0";
//   // }
//   if (typeof split[1]=== 'undefined') {
//     split[1] = "00";
//   }
//      document.getElementById("timer").innerHTML=split[0]+":"+split[1];
// }
// }


// startTimer();


// startTimer();

// alert("are you ready to play?");
$('#timer').hide();
displayMessage("Ready to ride? Press the space-bar for some commuters!");{}

body.onkeydown = function(e){
  // console.log(redLightBehind());
  // console.log(document.querySelector('.taxi').classList
  var loco1 = 3;
  var loco2 = 5;
  var loco3 = 9;
  var trafficLight = new TrafficLight(taxiLocationCounter);
  var tl1 = new TrafficLight(loco1);
  var tl2 = new TrafficLight(loco2);
  var tl3 = new TrafficLight(loco3);
if (e.keyCode===32) {
createQueues();
setTimeout(function(){displayMessage("Start the timer whenever you're ready and drop-off all your passengers as fast as you can!");},2000);
}
displayMessage("Great! Now you have some passengers!");

// if (document.querySelector('.taxi').classList.contains('slot-one-of-nine')) {
  if (e.keyCode===107 || e.keyCode===187) {

    if (elementQFirst.classList.contains('active')) {
      if (fiveCount>0) {
      taxiCountFive++;
      fiveCount--;
      console.log(fiveRem);
      }
}   else if (elementQSecond.classList.contains('active')) {
      if (tenCount>0) {
      taxiCountTen++;
      tenCount--;
      console.log(tenRem);
  }
} else if (elementQThird.classList.contains('active')) {
    if (twentyCount>0) {
    taxiCountTwenty++;
    twentyCount--;

    console.log(twentyRem);

    }
  }
} else if (e.keyCode===109 || e.keyCode===189) {
    if (elementQFirst.classList.contains('active')) {
        if (fiveCount<fiveRem) {
            taxiCountFive--;
            fiveCount++;

          }
  } if (elementQSecond.classList.contains('active')) {
      if (tenCount<tenRem) {
          taxiCountTen--;
          tenCount++;

  }
} if (elementQThird.classList.contains('active')) {
   if (twentyCount<twentyRem) {
    taxiCountTwenty--;
    twentyCount++;
  }
}
}
 displayTaxiPassengerCountFive(taxiCountFive);
displayQueueCountFive(fiveCount);
displayTaxiPassengerCountTen(taxiCountTen);
displayQueueCountTen(tenCount);
displayTaxiPassengerCountTwenty(taxiCountTwenty);
displayQueueCountTwenty(twentyCount);

if (fiveRem===taxiCountFive && tenRem===taxiCountTen && twentyRem===taxiCountTen) {
  displayMessage("Your taxi is full! Now you better get your passengers to their destinations before the time runs out. Press tab to skip a red-light, but beware you could get a fine!");
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
  }
if (timer.started()===true & timer.string()!=="00:00") {
  if (e.keyCode === 39  ) {
      if (taxiLocationCounter>0 && taxiLocationCounter < 3) {
        if(canIMoveForward(trafficLight)===true) {
        moveForward();
        // console.log(test);
        resetLightCounter(taxiLocationCounter);
      }
    } else if (taxiLocationCounter>=3 && taxiLocationCounter<5 && taxiCountFive===0 && canIMoveForward(trafficLight)===true) {
        moveForward();
        resetLightCounter(taxiLocationCounter);
      } else if (taxiLocationCounter>=5 && taxiLocationCounter<9 && taxiCountTen===0 && canIMoveForward(trafficLight)===true) {
        moveForward();
        resetLightCounter(taxiLocationCounter);
      } else if (taxiLocationCounter===9 && taxiCountTwenty===0 && canIMoveForward(trafficLight)===true) {
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
} if (taxiLocationCounter===3) {
  if (taxiCountFive>0) {
   setTimeout(function(){tl1.makeOrange();},500);
   setTimeout(function(){tl1.makeRed();},1000);
} else {
  tl1.makeGreen();
}
}
 if (taxiLocationCounter===5) {
   if (taxiCountTen>0) {
   setTimeout(function(){tl2.makeOrange();},500);
   setTimeout(function(){tl2.makeRed();},1000);
} else {
  tl2.makeGreen();
}
}
 if (taxiLocationCounter===5) {
   if (taxiCountTwenty>0) {
   setTimeout(function(){tl3.makeOrange();},500);
   setTimeout(function(){tl3.makeRed();},1000);
} else {
  tl3.makeGreen();
}
}
}



function Timer(x) {
  var Finish = x;
  var interval = 10;
  var running = false;
  var CurrentTime = new Date();
  var EndTime = new Date();
  var pause = $('#pause');
  var resume = $('#resume');
  var stop = $('#stop');
  var timer = $('#timer');
  var seconds = 0;
  var milliseconds = 0;
  var test;

  var updateTimer = function() {
    if(CurrentTime + interval < EndTime) {
      setTimeout(updateTimer, interval);
    } else {
      timer.html("00:00");
    }

    if(running) {
        CurrentTime += interval;
        }

    var time = new Date();
    time.setTime( EndTime - CurrentTime );
    var seconds = time.getSeconds();
    var milliseconds = time.getMilliseconds();
    milliseconds = milliseconds.toString();
    if (milliseconds.length<3) {
      milliseconds = "0"+milliseconds;
    }
    milliseconds = milliseconds.substring(0,2);
    milliseconds = Number(milliseconds);
    timer.html((seconds < 10 ? '0' : '') + seconds+ ':'+ (milliseconds < 10 ? '0' : '') + milliseconds );
    test = (seconds < 10 ? '0' : '') + seconds+ ':'+ (milliseconds < 10 ? '0' : '') + milliseconds;
    test = test.toString();

    // if (CurrentTime = EndTime) {
    //   running = false;
    // }
};

  this.string = function() {
    return test;
  };

  this.stop = function() {
    if ($('#resume').is(":visible")===true) {
      running = true;
      pause.show();
      resume.hide();
      CurrentTime = EndTime - interval;
      console.log($('#resume').is(":visible"));
      running = false;
    }
    $('#timer').hide();
    $('.message').show();
    CurrentTime = EndTime - interval;
    running = false;
    // if (CurrentTime = EndTime - interval) {
    //   running = false;
    // }
  };

  this.pause = function() {
      running = false;
      pause.hide();
      resume.show();
  };

  this.resume = function() {
      running = true;
      pause.show();
      resume.hide();
  };

  this.start = function() {
      running = true;
      finish = Finish;
      CurrentTime = ( new Date() ).getTime();
      EndTime = ( new Date() ).getTime() + finish;
      console.log(this.started());
      updateTimer();
      $('#timer').show();
      $('.message').hide();
      console.log(this.string());
    };

  this.started = function() {
    return running;
  };
}

var timer = new Timer(30000);
console.log(timer.started());
console.log(timer.string());
