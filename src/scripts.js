// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/base.scss';
// import './css/styles.css'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// console.log("This is the JavaScript entry file - your code begins here.");

// <<<>>> IMPORTS <<<>>>
import "./css/styles.css";
import { fetchAPIData, postAPIData }  from "./apiCalls.js";
import { domUpdates } from './domUpdates.js'
import Traveler from "./traveler.js";
// import Destination from "./destination.js"
import Trip from "./trip.js"

// <<<>>> GLOBAL VARIABLES <<<>>>
let traveler;
let travelerData, tripData, destinationData;
let travelerIndex;


// <<<>>> QUERY SELECTORS <<<>>>
const destinationInput = document.querySelector('.drop');
const startDateInput = document.querySelector('.trip-start');
const durationInput = document.querySelector('.trip-duration');
const numTravelersInput = document.querySelector('.trip-travelers');
const quoteButton = document.querySelector('.booking-quote');

const tripButtons = document.querySelectorAll('.trip-buttons')

// <<<>>> EVENT LISTENERS <<<>>>
tripButtons.forEach(button => button.addEventListener('click', displayTrips))
quoteButton.addEventListener('click', function() {
  requestQuote(traveler, tripData);
})

// <<<>>> API CALLS <<<>>>

function fetchData() {
  return Promise.all([fetchAPIData('travelers'), fetchAPIData('trips'), fetchAPIData('destinations')])
}

function assignData(index) {
  travelerIndex = index
  fetchData()
  // .then(console.log(promises, 'promises'))
  .then((promises => {
    // console.log(promises[0].travelers)
    const fetchedTravelerData = promises[0].travelers
    // console.log(fetchedTravelerData)
    const fetchedTripData = promises[1].trips
    // console.log(fetchedTripData)
    const fetchedDestinationData = promises[2].destinations
    // console.log(fetchedDestinationData)
    traveler = new Traveler(fetchedTravelerData[index])
    // console.log(traveler)

    travelerData = fetchedTravelerData.map(traveler => {
      return new Traveler(traveler)})
      // console.log(travelerData)
    tripData = fetchedTripData.map(trip => {
      return new Trip(trip)
    })
    // console.log(tripData)
    destinationData = fetchedDestinationData
    // console.log(destinationData)
    displayTravelerInfo(traveler, tripData, destinationData)
  }))
  // .then(console.log(fetchedTravelerData))
}

// <<<>>> EVENT HANDLERS <<<>>>

function displayTravelerInfo(traveler, tripData, destinationData) {
  traveler.findAllTrips(tripData, destinationData);
  traveler.sortTrips();
  domUpdates.greetUser(traveler);
  domUpdates.displayTripCards(traveler, destinationData, 'allTrips');
  domUpdates.displayYearlyTripCost(traveler);
  displayTripForm(destinationData);
}

function displayTrips(event) {
  domUpdates.displayTripCards(traveler, destinationData, event.target.id)
}

function displayTripForm(destinationData) {
  domUpdates.createDropMenu(destinationData);
}

function createNewTrip(traveler, tripData) {
  const startDate = (startDateInput.value)
  const duration = (durationInput.value)
  const travelers = (numTravelersInput.value)
  const destination = (destinationInput.value)
  return {
    "id": tripData.length + 1,
    "userID": parseInt(traveler.id),
    "destinationID": parseInt(destination),
    "travelers": parseInt(travelers),
    "date": startDate.split('-').join('/'),
    "duration": parseInt(duration),
    "status": "pending",
    "suggestedActivities": []
  }
}

function requestQuote(traveler, tripData) {
  const newTrip = createNewTrip(traveler, tripData)
  const tripWithDestination = domUpdates.findTripDestination(newTrip, destinationData)
  domUpdates.displayTripQuote(tripWithDestination)
}


// will need to remove this for iteration 3
window.addEventListener("onload", assignData(1));
