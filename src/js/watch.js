const secNow = new Date().getSeconds();
const minNow = new Date().getMinutes();
const hourNow = new Date().getHours();

const watchValues = document.getElementById("watchValues");

function* nextGen (start, end = 60) {
    while (start < end) {
        yield start++;
    }
    while (start === end) {
        yield* fromZero();
    }
    
}

function* fromZero (start = 0, end = 60) {
    while (start < end) {
        yield start++;
    }
}

const secCallGen = nextGen(secNow);
const minCallGen = nextGen(minNow);
const hourCallGen = nextGen(hourNow);

let nextMin = minCallGen.next();
let nextHour = hourCallGen.next();

const timeWatch = {
    seconds: `${secNow}`.padStart(2, "0"),
    minutes: `${minNow}`.padStart(2, "0"),
    hours: `${hourNow}`.padStart(2, "0")
}

export {watchValues, secCallGen, minCallGen, hourCallGen, nextMin, nextHour, timeWatch};