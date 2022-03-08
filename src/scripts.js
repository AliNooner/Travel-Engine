// <<<>>> IMPORTS <<<>>>

import "./css/styles.css";
import { fetchAPIData, postAPIData } from "./apiCalls.js";
import { domUpdates } from "./domUpdates.js";
import Traveler from "./traveler.js";
import Trip from "./trip.js";

// <<<>>> GLOBAL VARIABLES <<<>>>

let traveler;
let travelerData, tripData, destinationData;
let travelerIndex;

// <<<>>> QUERY SELECTORS <<<>>>

const destinationInput = document.querySelector(".drop");
const startDateInput = document.querySelector(".trip-start");
const durationInput = document.querySelector(".trip-duration");
const numTravelersInput = document.querySelector(".trip-travelers");
const quoteButton = document.querySelector(".booking-quote");

const tripButtons = document.querySelectorAll(".trip-buttons");
const requestTripButton = document.querySelector(".request-trip-button");
const username = document.getElementById("username-field");
const password = document.getElementById("password-field");
const loginButton = document.getElementById("login-button");

// <<<>>> EVENT LISTENERS <<<>>>

tripButtons.forEach((button) => button.addEventListener("click", displayTrips));
quoteButton.addEventListener("click", function () {
  requestQuote(traveler, tripData);
});
requestTripButton.addEventListener("click", function () {
  requestNewTrip();
});
loginButton.addEventListener("click", function () {
  loginUser();
});

// <<<>>> API CALLS <<<>>>

function fetchData() {
  return Promise.all([
    fetchAPIData("travelers"),
    fetchAPIData("trips"),
    fetchAPIData("destinations"),
  ]);
}

function assignData(index) {
  travelerIndex = index;
  fetchData().then((promises) => {
    const fetchedTravelerData = promises[0].travelers;
    const fetchedTripData = promises[1].trips;
    const fetchedDestinationData = promises[2].destinations;

    traveler = new Traveler(fetchedTravelerData[index]);
    travelerData = fetchedTravelerData.map((traveler) => {
      return new Traveler(traveler);
    });
    tripData = fetchedTripData.map((trip) => {
      return new Trip(trip);
    });
    destinationData = fetchedDestinationData;
    displayTravelerInfo(traveler, tripData, destinationData);
  });
}

// <<<>>> EVENT HANDLERS <<<>>>

function displayTravelerInfo(traveler, tripData, destinationData) {
  traveler.findAllTrips(tripData, destinationData);
  traveler.sortTrips();
  domUpdates.greetUser(traveler);
  domUpdates.displayTripCards(traveler, destinationData, "allTrips");
  domUpdates.displayYearlyTripCost(traveler);
  displayTripForm(destinationData);
}

function displayTrips(event) {
  domUpdates.displayTripCards(traveler, destinationData, event.target.id);
}

function displayTripForm(destinationData) {
  domUpdates.createDropMenu(destinationData);
}

function createNewTrip(traveler, tripData) {
  const startDate = startDateInput.value;
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destination = destinationInput.value;
  return {
    id: tripData.length + 1,
    userID: parseInt(traveler.id),
    destinationID: parseInt(destination),
    travelers: parseInt(travelers),
    date: startDate.split("-").join("/"),
    duration: parseInt(duration),
    status: "pending",
    suggestedActivities: [],
  };
}

function requestQuote(traveler, tripData) {
  const newTrip = createNewTrip(traveler, tripData);
  const tripWithDestination = domUpdates.findTripDestination(
    newTrip,
    destinationData
  );
  domUpdates.displayTripQuote(tripWithDestination);
}

function requestNewTrip() {
  const newTrip = createNewTrip(traveler, tripData);
  postAPIData(newTrip)
    .then(() => {
      assignData(travelerIndex);
    })
    .then(() => {
      domUpdates.resetTripForm(
        startDateInput,
        durationInput,
        numTravelersInput,
        destinationInput
      );
    });
}

function loginUser() {
  let usernameInput = username.value;
  let passwordInput = password.value;
  let index = parseInt(usernameInput.split("traveler")[1]) - 1;
  if (!username.value || !password.value) {
    domUpdates.displayLoginError();
  } else if (passwordInput === "travel" && index > 0 && index <= 50) {
    assignData(index);
    domUpdates.hideLoginPage();
    domUpdates.unhideMainPage();
    return index;
  }
}
