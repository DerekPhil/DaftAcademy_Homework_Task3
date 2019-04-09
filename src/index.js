import "../src/sass/main.scss";
import '@babel/polyfill';
import * as watchVariables from "../src/js/watch.js";

const secTimer = setInterval( () => {
    let nextSec = watchVariables.secCallGen.next();
    watchVariables.timeWatch.seconds = `${nextSec.value}`.padStart(2, "0");
    if (nextSec.value === 59) {
        watchVariables.nextMin = watchVariables.minCallGen.next();
        watchVariables.timeWatch.minutes = `${watchVariables.nextMin.value}`.padStart(2, "0");
        if (watchVariables.nextMin.value === 59) {
            watchVariables.nextHour = watchVariables.hourCallGen.next();
            watchVariables.timeWatch.hours = `${watchVariables.nextHour.value}`.padStart(2, "0");
        }
    }
    watchVariables.watchValues.textContent = `${watchVariables.timeWatch.hours} : ${watchVariables.timeWatch.minutes} : ${watchVariables.timeWatch.seconds}`;
}, 1000)