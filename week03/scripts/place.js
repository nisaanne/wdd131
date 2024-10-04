// Display the current year
var currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Display the last modified date
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;