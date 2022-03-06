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
import fetchAPIdata from "./apiCalls.js";
import Traveler from "./traveler.js";
import Destination from "./destination.js"
import Trip from "./trip.js"
import domUpdates from '.domUpdates'

// <<<>>> GLOBAL VARIABLES <<<>>>
let traveler;
let travelerData, tripData, destinationData;
let travelerIndex;


// <<<>>> QUERY SELECTORS <<<>>>

// <<<>>> EVENT HANDLERS <<<>>>

// API apiCalls

function fetchData() {
  return Promise.all([fetchAPIData('travelers'), fetchAPIData('trips'), fetchAPIData('destnations')])
}

function assignData(index) {
  travelerIndex = index
  fetchData()
  .then((promises => {
    const fetchedTravelerData = promises[0].travelers
    const fetchedTripData = promises[1].trips
    const fetchedDestinationData = promises[2].destinations
    traveler = new Traveler(fetchedTravelerData[index])
    travelerData = fetchedTravelerData.map(traveler => {
      return new Traveler(traveler)
    })
    tripData = fetchedTripData.map(trip => {
      return new Trip(trip)
    })
    destinationData = fetchedDestinationData
    displayTravelerInfo(traveler, tripData, destinationData)
  }))
}
