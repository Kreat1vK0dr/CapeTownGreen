var assert = chai.assert;

describe("keyCodeName", function(){

    it("should return right for 39", function(){
        var rightArrow = keyCodeName(39);
        assert.equal("right", rightArrow);
    });

    it("should return left for 37", function(){
        var string = keyCodeName(37);
        assert.equal("left", string);
    });

    it("should return up for 38", function(){
        var up = keyCodeName(38);
        assert.equal("up", up);
    });

    it("should return down for 40", function(){
        var down = keyCodeName(40);
        assert.equal("down", down);
    });

    it("should return blank for any other code", function(){
        assert.equal("", keyCodeName(56));
        assert.equal("", keyCodeName(32));
        assert.equal("", keyCodeName(64));
    });

});

describe("createLocationClass", function(){
    it("should return `slot-one-of-nine` for 1", function(){
        assert.equal("slot-one-of-nine", createLocationClass(1));
    });

    it("should return `slot-five-of-nine` for 5", function(){
        assert.equal("slot-five-of-nine", createLocationClass(5));
    });

    it("should return `slot-nine-of-nine` for 9", function(){
        assert.equal("slot-nine-of-nine", createLocationClass(9));
    });
});

describe("createTrafficLightClass", function(){

    it("should return `slot-one-of-nine` for 1", function(){
        assert.equal(".one-of-nine", createTrafficLightClass(1));
    });

    it("should return `slot-five-of-nine` for 5", function(){
        assert.equal(".five-of-nine", createTrafficLightClass(5));
    });

    it("should return `slot-nine-of-nine` for 9", function(){
        assert.equal(".nine-of-nine", createTrafficLightClass(9));
    });
});

describe("moveForward", function(){
    it("should remove the current location from the taxi element and add the next one", function(){

        moveForward(1);

        assert.equal(false, document.querySelector(".taxi").classList.contains("slot-one-of-nine"));
        assert.equal(true, document.querySelector(".taxi").classList.contains("slot-two-of-nine"));

    });
});

describe("TrafficLight", function(){

    it("makeGreen should make the trafficLight green", function(){
        var tl = new TrafficLight(1);
        tl.makeGreen();

        var element = document.querySelector(".one-of-nine");
        assert.equal(true, element.classList.contains("lights-go"));
        assert.equal(false, element.classList.contains("lights-stop"));
        assert.equal(false, element.classList.contains("lights-slowdown"));
        assert.equal("green", tl.color());

    });

    it("makeOrange should make the trafficLight orange", function(){
        var tl = new TrafficLight(1);
        tl.makeOrange();

        var element = document.querySelector(".one-of-nine");
        assert.equal(false, element.classList.contains("lights-go"));
        assert.equal(false, element.classList.contains("lights-stop"));
        assert.equal(true, element.classList.contains("lights-slowdown"));
        assert.equal("orange", tl.color());

    });

    it("makeRed should make the trafficLight red", function(){
        var tl = new TrafficLight(1);
        tl.makeRed();

        var element = document.querySelector(".one-of-nine");
        assert.equal(false, element.classList.contains("lights-go"));
        assert.equal(true, element.classList.contains("lights-stop"));
        assert.equal(false, element.classList.contains("lights-slowdown"));
        assert.equal("red", tl.color());

    });

});

describe("The taxi", function(){

    it("should stop", function(){
        assert.equal(1,2);
    });

    it("should go", function(){
        assert.equal(1,2);
    });
});
