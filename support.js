

  // console.log(passengers);
  // console.log(passengerCount);

// };
// allocatePassengers();

// console.log(passengerList());
// console.log(passengerList().length);

// var taxiPriceType = function(){
//   var random = randomNumber(3);
//   return moneyIndex[random];
// };

var changeTaxiPassengers = function (array) {
  displayTaxiPassengerCountFive(array[0]);
  displayTaxiPassengerCountTen(array[1]);
  displayTaxiPassengerCountTwenty(array[2]);
}




var moveTaxi = function(from, to) {
    var taxi = document.querySelector('.taxi');
    taxi.classList.remove(from);
    taxi.classList.add(to);
};

var displayMessage = function(text){
    var message = document.getElementById("message");
    message.innerHTML = text;
};
