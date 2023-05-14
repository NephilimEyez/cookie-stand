'use strict';

// *** GLOBALS ***

const hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
let sales = document.getElementById('sales');
let loremIpsum = 'Captain Janeway: Who wanted to muck around in the dirt when you could be studying quantum mechanics\? Seven of Nine: "Impossible" is a word that humans use far too often. James T. Kirk: There seems to be no sign of intelligent life anywhere... Odo: You\'re still disgusting!  Quark: Wouldn\'t have it any other way! The Doctor: You should know I\'m a hologram and can\'t be bent, spindled, or mutilated, so don\'t bother trying.';
const storeArray = [];
let allLocationSales = 0;
let locationForm = document.getElementById('newLocation');

// *** HELPER FUNCTIONS ***

function renderAll(){
  for(let i = 0; i < storeArray.length; i++){
    storeArray[i].render();
  }
}

// *** FORM SUBMISSION EVENT LISTENER ***

function handleSubmit(event){
  event.preventDefault();
  let locationName = event.target.locationName.value;
  let formMin = Number(event.target.minCust.value);
  let formMax = Number(event.target.maxCust.value);
  let formAvg = Number(event.target.avgSale.value);

  let newLocation =  new Store(locationName, formMin, formMax, formAvg);

  storeArray.push(newLocation);
  newLocation.render();

  tableFooter();

  locationForm.reset();
}

locationForm.addEventListener('submit', handleSubmit);

// *** CONSTRUCTORS ***

function Store(location, minCust, maxCust, avgSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgSale;
  this.cookieSales = [];
}

// *** PROTOTYPE FUNCTIONS ***

Store.prototype.getSales = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min); // taken from MDN
}

Store.prototype.render = function(){
  let totalSales = 0;

  for (let i = 0; i < hours.length; i++){
    let placeholder = this.getSales(this.maxCust, this.minCust) * this.avgCookie;
    this.cookieSales.push(Math.ceil(placeholder));
  }
  for (let i = 0; i < this.cookieSales.length; i++){
    totalSales += this.cookieSales[i];
  }

  let storeRow = document.createElement('tr');
  sales.appendChild(storeRow);
  let locationName = document.createElement('h3');
  storeRow.appendChild(locationName);
  locationName.innerText = `${this.location}`;

  for (let i =0; i < hours.length; i++) {
    let tdSales = document.createElement('td');
    tdSales.innerText = `${this.cookieSales[i]}`;
    storeRow.appendChild(tdSales);
  }

  let allSales = document.createElement('td');
  allSales.innerText = `${totalSales}`;
  storeRow.appendChild(allSales);
}

function tableHeader(){
  let tableHeading = document.createElement('tr');
  sales.appendChild(tableHeading);

  let blankCell = document.createElement('th');
  tableHeading.appendChild(blankCell);

  for (let i = 0; i < hours.length; i++){
    let tableHeader = document.createElement('th');
    tableHeader.innerText = `${hours[i]}`;
    tableHeading.appendChild(tableHeader);
  }

  let totalSalesCell = document.createElement('th');
  totalSalesCell.innerText = 'Daily Location Total';
  tableHeading.appendChild(totalSalesCell);
}

function tableFooter(){
  let tableFooter = document.createElement('tr');
  sales.appendChild(tableFooter);
  let footerWords = document.createElement('h3');
  tableFooter.appendChild(footerWords);
  footerWords.innerText = 'Hourly Totals';

  for (let i = 0; i < hours.length; i++){
    let hourlyTotal = 0;
    for (let j = 0; j < storeArray.length; j++) {
      hourlyTotal += storeArray[j].cookieSales[i];
      allLocationSales += hourlyTotal;
    }
    let hourTotal = document.createElement('td');
    hourTotal.innerText = `${hourlyTotal}`;
    tableFooter.appendChild(hourTotal);
  }

  let totalSalesFooter = document.createElement('td');
  totalSalesFooter.innerText = `${allLocationSales}`;
  tableFooter.appendChild(totalSalesFooter);
}
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

storeArray.push(seattle, tokyo, dubai, paris, lima);

tableHeader();
renderAll();
tableFooter();
