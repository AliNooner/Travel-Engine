let tripEstimate = document.getElementById('trip-estimate');

export const domUpdates = {

  greetUser(traveler) {
    const greetingMessage = document.getElementById('greeting');
    const firstName = traveler.name.split(''[0]);
    greetingMessage.innerText = `Welcome, ${firstName}!`;
  },

  displayYearlyTripCost(traveler) {
    const annualTripCost = document.getElementById('annual-spending');
    const yearlyCost = traveler.calculateAmountSpentThisYear();
    console.log(yearlyCost, 'yearlycost')
    if(yearlyCost !== 0) {
      annualTripCost.innerText = `You have spent $${yearlyCost} on trips so far this year`
    } else {
        annualTripCost.innerText = `You have not taken any trips this year`
    }
  },

  displayTripCards(traveler, allDestinations, cardType) {
    let cardSection = document.getElementById('card-section')
    cardSection.innerHTML = '';

    if(traveler[cardType].length > 0) {
      traveler[cardType].forEach(trip => {
        const date = new Date(trip.date)
        const splitDate = date.toLocaleString('en-US').split(',');
        const formattedDate = splitDate[0]

        let cardInfo =
        `<section class="card">
          <div class= "image-section">
            <img class= "trip-image" src= "${trip.currentDestination.image}" alt = "${trip.currentDestination.alt}">
          </div>
          <div class= "info-section">
            <p>${trip.currentDestination.destination.toUpperCase()}</p>
            <p>Trip Date: ${formattedDate}</p>
            <p>Travelers: ${trip.travelers}</p>
            <p>Number of Days: ${trip.duration}</p>
            <p>Status: ${trip.status}</p>
          </div>
        </section>`
          cardSection.insertAdjacentHTML('beforeend', cardInfo)
      })
    } else {
      cardSection.innerHTML = `<p class= "no-trip">There are no trips to display</p>`
    }
  },

// }

  createDropMenu(destinationData) {
    const dropMenu = document.getElementById('trip-destination');

    let allDestinationsList = "";
    destinationData.forEach((destination) => {
      allDestinationsList += `<option value= "${destination.id}">${destination.destination}</option>`;
    });
    dropMenu.insertAdjacentHTML("beforeend", allDestinationsList);
  },

  findTripDestination(newTrip, destinationData) {
    destinationData.forEach(destination => {
      if(newTrip.destinationID === destination.id) {
        newTrip.currentDestination = destination
      }
    })
    return newTrip;
  },

  displayTripQuote(tripWithDestination) {
    console.log(tripWithDestination, 'here')
    tripEstimate.innerHTML = '';

    const totalLodgingCost = tripWithDestination.currentDestination.estimatedLodgingCostPerDay * (tripWithDestination.duration / 86400000)
    console.log(totalLodgingCost, 'total lodging cost')
    const totalFlightCost = tripWithDestination.currentDestination.estimatedFlightCostPerPerson * tripWithDestination.travelers * 2
    console.log(totalFlightCost, 'total flight cost')
    const totalTripCost = 1.1 * (totalLodgingCost + totalFlightCost)
    tripWithDestination.tripCost = totalTripCost.toFixed(2);

    tripEstimate.innerHTML = `The estimated cost of this trip is $${tripWithDestination.tripCost}`
  },

  resetTripForm(startDateInput, durationInput, numTravelersInput, destinationInput) {
    startDateInput.value = '';
    durationInput.value = '';
    numTravelersInput.value = '';
    destinationInput.value = 0;
    tripEstimate.innerHTML = '';
  },

  unhideMainPage() {
    let mainPage = document.querySelector('.main-page')
    mainPage.classList.remove('hidden')
  },

  hideLoginPage() {
    let loginPage = document.querySelector('.login-page')
    loginPage.classList.add('hidden')
  },

  displayLoginError() {
    let errorMessage = document.querySelector('.login-error')
    errorMessage.classList.remove('hidden')
  }
};
