// Display the current year
var currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Display the last modified date
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;

const wtf = document.querySelector('wcf');

function windchill(temp, speed){
    return 13.12 + (0.6215 * tempC) - (11.37 * Math.pow (speed, 0.16)) + (0.395 * tempC * Math.pow(speed, 0.16));
}

let tempC = 10;
let speed = 5;
if (tempC <= 10 && speed > 4.8){
    wcf.textContent = windchill(tempC, speed).toFixed(1);
} else {wcf.textContent = 'N/A';
    
}                                                        