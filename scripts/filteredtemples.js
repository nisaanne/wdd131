const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

{
  var currentYear = new Date().getFullYear();

  document.getElementById('current-year').textContent = currentYear;

};


{
  let lastModifiedDate = document.lastModified;
  document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California",
    dedicated: "1964, November, 17",
    area: 80157,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
  },

  {
    templeName: "Sacramento California",
    location: "Sacramento, California",
    dedicated: "2006, December, 3",
    area: 19500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/400x250/sacramento-temple-766557-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: "1983, December, 2",
    area: 72000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  },
];



createTempleCard(temples);

const hometemplesLink = document.querySelector("#home");

hometemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated > "1800"));
})

createTempleCard(temples);

const oldtemplesLink = document.querySelector("#old");

oldtemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated < "2000"));
})

createTempleCard(temples);

const newtemplesLink = document.querySelector("#new");

newtemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated >= "2000"));
});

createTempleCard(temples);

const largetemplesLink = document.querySelector("#large");

largetemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > "90000"));
});

createTempleCard(temples);

const smalltemplesLink = document.querySelector("#small");

smalltemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < "10000"));
});


function createTempleCard(filteredTemples) {
  document.querySelector(".gallary").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add("card");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p"); // Define the area element
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area); // Append the area element
    card.appendChild(img);

    document.querySelector(".gallary").appendChild(card);
  });
}



