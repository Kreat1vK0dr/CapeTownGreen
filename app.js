
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
//adding function displayMessage (copied from support.js)


var moveTaxi = function(from, to) {
  var taxi = document.querySelector('.taxi');
    taxi.classList.remove(from);
    taxi.classList.add(to);
};


var num_words = ["slot-one-of-nine","slot-two-of-nine", "slot-three-of-nine", "slot-four-of-nine", "slot-five-of-nine", "slot-six-of-nine", "slot-seven-of-nine", "slot-eight-of-nine", "slot-nine-of-nine"];

var getTaxiClasss = function (currentIndex) {
    var num_words = ["slot-one-of-nine","slot-two-of-nine", "slot-three-of-nine", "slot-four-of-nine", "slot-five-of-nine", "slot-six-of-nine", "slot-seven-of-nine", "slot-eight-of-nine", "slot-nine-of-nine"];
    return num_words[currentIndex - 1];
}

var taxiLocationCounter = 1;
//listen for the keydown event(
body.onkeydown = function(e){
    var x = e.keyCode;
    displayMessage(/*keyCodeName(x)*/taxiLocationCounter+1);

    if (e.keyCode === 39) {
        if (taxiLocationCounter > 0 && taxiLocationCounter < 9) {
          taxiLocationCounter += 1;
          moveTaxi(num_words[taxiLocationCounter-2],num_words[taxiLocationCounter-1]);

        } else {
            taxiLocationCounter = 1;
            moveTaxi(num_words[num_words.length - 1], num_words[0]);
        }

     } else if (e.keyCode === 37) {
        if (taxiLocationCounter===1) {
              taxiLocationCounter = num_words.length;
              moveTaxi(num_words[0],num_words[num_words.length-1]);
            } else if (taxiLocationCounter>1 && taxiLocationCounter<10) {
                  taxiLocationCounter -= 1;
                  moveTaxi(num_words[taxiLocationCounter],num_words[taxiLocationCounter-1]);
            }
        }
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
