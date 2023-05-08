'use strict';

// *** GLOBALS ***

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
let sales = document.getElementById('sales');

let loremIpsum = ' Captain Janeway: Who wanted to muck around in the dirt when you could be studying quantum mechanics\? Seven of Nine: "Impossible" is a word that humans use far too often. James T. Kirk: There seems to be no sign of intelligent life anywhere... Odo: You\'re still disgusting!  Quark: Wouldn\'t have it any other way! The Doctor: You should know I\'m a hologram and can\'t be bent, spindled, or mutilated, so don\'t bother trying.'

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  getSales: function(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min); // taken from MDN
  },
  cookieSales: [],
  render: function(){
    let totalSales = 0;

    for (let i = 0; i < hours.length; i++){
      let placeholder = this.getSales(this.maxCust, this.minCust) * this.avgCookie;
      this.cookieSales.push(Math.trunc(placeholder));
    }
    for (let i = 0; i < this.cookieSales.length; i++){
      totalSales += this.cookieSales[i];
    }
    this.cookieSales.push(totalSales);

    let articleElement = document.createElement('article');

    sales.appendChild(articleElement);

    let locationHeading = document.createElement('h2');
    locationHeading.innerText = this.location;
    articleElement.appendChild(locationHeading);

    let description = document.createElement('p');
    description.innerText = loremIpsum;
    articleElement.appendChild(description);

    let hourlySalesList = document.createElement('ul');
    articleElement.appendChild(hourlySalesList);

    for (let i =0; i < hours.length; i++) {
      let liSales = document.createElement('li');
      liSales.innerText = `${hours[i]}: ${this.cookieSales[i]} cookies`;
      hourlySalesList.appendChild(liSales);
    }

    let allSales = document.createElement('li');
    let allSalesPull = this.cookieSales[this.cookieSales.length -1]; // Freecode camp helped here
    allSales.innerText = `Total Sales: ${allSalesPull}`;
    hourlySalesList.appendChild(allSales);
  },
}

let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,  
  getSales: function(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min); // taken from MDN
  },
  cookieSales: [],
  render: function(){
    let totalSales = 0;

    for (let i = 0; i < hours.length; i++){
      let placeholder = this.getSales(this.maxCust, this.minCust) * this.avgCookie;
      this.cookieSales.push(Math.trunc(placeholder));
    }
    for (let i = 0; i < this.cookieSales.length; i++){
      totalSales += this.cookieSales[i];
    }
    this.cookieSales.push(totalSales);

    let articleElement = document.createElement('article');

    sales.appendChild(articleElement);

    let locationHeading = document.createElement('h2');
    locationHeading.innerText = this.location;
    articleElement.appendChild(locationHeading);

    let description = document.createElement('p');
    description.innerText = loremIpsum;
    articleElement.appendChild(description);

    let hourlySalesList = document.createElement('ul');
    articleElement.appendChild(hourlySalesList);

    for (let i =0; i < hours.length; i++) {
      let liSales = document.createElement('li');
      liSales.innerText = `${hours[i]}: ${this.cookieSales[i]} cookies`;
      hourlySalesList.appendChild(liSales);
    }

    let allSales = document.createElement('li');
    let allSalesPull = this.cookieSales[this.cookieSales.length -1]; // Freecode camp helped here
    allSales.innerText = `Total Sales: ${allSalesPull}`;
    hourlySalesList.appendChild(allSales);
  },
}

let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  getSales: function(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min); // taken from MDN
  },
  cookieSales: [],
  render: function(){
    let totalSales = 0;

    for (let i = 0; i < hours.length; i++){
      let placeholder = this.getSales(this.maxCust, this.minCust) * this.avgCookie;
      this.cookieSales.push(Math.trunc(placeholder));
    }
    for (let i = 0; i < this.cookieSales.length; i++){
      totalSales += this.cookieSales[i];
    }
    this.cookieSales.push(totalSales);

    let articleElement = document.createElement('article');

    sales.appendChild(articleElement);

    let locationHeading = document.createElement('h2');
    locationHeading.innerText = this.location;
    articleElement.appendChild(locationHeading);

    let description = document.createElement('p');
    description.innerText = loremIpsum;
    articleElement.appendChild(description);

    let hourlySalesList = document.createElement('ul');
    articleElement.appendChild(hourlySalesList);

    for (let i =0; i < hours.length; i++) {
      let liSales = document.createElement('li');
      liSales.innerText = `${hours[i]}: ${this.cookieSales[i]} cookies`;
      hourlySalesList.appendChild(liSales);
    }

    let allSales = document.createElement('li');
    let allSalesPull = this.cookieSales[this.cookieSales.length -1]; // Freecode camp helped here
    allSales.innerText = `Total Sales: ${allSalesPull}`;
    hourlySalesList.appendChild(allSales);
  },
}

let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  getSales: function(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min); // taken from MDN
  },
  cookieSales: [],
  render: function(){
    let totalSales = 0;

    for (let i = 0; i < hours.length; i++){
      let placeholder = this.getSales(this.maxCust, this.minCust) * this.avgCookie;
      this.cookieSales.push(Math.trunc(placeholder));
    }
    for (let i = 0; i < this.cookieSales.length; i++){
      totalSales += this.cookieSales[i];
    }
    this.cookieSales.push(totalSales);

    let articleElement = document.createElement('article');

    sales.appendChild(articleElement);

    let locationHeading = document.createElement('h2');
    locationHeading.innerText = this.location;
    articleElement.appendChild(locationHeading);

    let description = document.createElement('p');
    description.innerText = loremIpsum;
    articleElement.appendChild(description);

    let hourlySalesList = document.createElement('ul');
    articleElement.appendChild(hourlySalesList);

    for (let i =0; i < hours.length; i++) {
      let liSales = document.createElement('li');
      liSales.innerText = `${hours[i]}: ${this.cookieSales[i]} cookies`;
      hourlySalesList.appendChild(liSales);
    }

    let allSales = document.createElement('li');
    let allSalesPull = this.cookieSales[this.cookieSales.length -1]; // Freecode camp helped here
    allSales.innerText = `Total Sales: ${allSalesPull}`;
    hourlySalesList.appendChild(allSales);
  },
}

let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  getSales: function(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min); // taken from MDN
  },
  cookieSales: [],
  render: function(){
    let totalSales = 0;

    for (let i = 0; i < hours.length; i++){
      let placeholder = this.getSales(this.maxCust, this.minCust) * this.avgCookie;
      this.cookieSales.push(Math.trunc(placeholder));
    }
    for (let i = 0; i < this.cookieSales.length; i++){
      totalSales += this.cookieSales[i];
    }
    this.cookieSales.push(totalSales);

    let articleElement = document.createElement('article');

    sales.appendChild(articleElement);

    let locationHeading = document.createElement('h2');
    locationHeading.innerText = this.location;
    articleElement.appendChild(locationHeading);

    let description = document.createElement('p');
    description.innerText = loremIpsum;
    articleElement.appendChild(description);

    let hourlySalesList = document.createElement('ul');
    articleElement.appendChild(hourlySalesList);

    for (let i =0; i < hours.length; i++) {
      let liSales = document.createElement('li');
      liSales.innerText = `${hours[i]}: ${this.cookieSales[i]} cookies`;
      hourlySalesList.appendChild(liSales);
    }

    let allSales = document.createElement('li');
    let allSalesPull = this.cookieSales[this.cookieSales.length -1]; // Freecode camp helped here
    allSales.innerText = `Total Sales: ${allSalesPull}`;
    hourlySalesList.appendChild(allSales);
  },
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();