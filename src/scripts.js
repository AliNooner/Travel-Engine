// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/base.scss';
// import './css/styles.css'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log("This is the JavaScript entry file - your code begins here.");

// <<<>>> IMPORTS <<<>>>
import "./css/styles.css";
import getAllData from "./apiCalls.js";
import Traveler from "./traveler.js"

// <<<>>> GLOBAL VARIABLES <<<>>>

let travelers, trips, destinations, currentTraveler;

// <<<>>> QUERY SELECTORS <<<>>>

// <<<>>> EVENT HANDLERS <<<>>>

function loadPage() {
  fetchAllData();
}

function fetchAllData() {
  Promise.all([
    getAllData("http://localhost:3001/api/v1/travelers"),
    getAllData("http://localhost:3001/api/v1/trips"),
    getAllData("http://localhost:3001/api/v1/destinations"),
    getAllData("http://localhost:3001/api/v1/travelers/3"),
  ]).then((data) => {
    console.log('hi!')
    console.log(data[1]);
    createDatasets(data[0], data[1], data[2], data[3]);
  });
}

const createDatasets = (
  travelerData,
  tripData,
  destinationData,
  singleTraveler
) => {
  travelers = travelerData.travelers;
  trips = tripData.trips;
  destinations = destinationData.destinations;
  currentTraveler = new Traveler(singleTraveler);
};

window.onload = loadPage();
