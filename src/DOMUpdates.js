export const domUpdates = {

  greetUser(traveler) {
    const greetingMessage = document.getElementById('.greeting');
    const firstName = traveler.name.split(''[0]);
    greetingMessage.innerText = `Welcome, ${firstName}!`;
  },

  displayYearlyTripCost(traveler) {
    const annualTripCost = document.getElementById('annual-spending');
    const yearlyCost = traveler.calculateAmountSpentThisYear();

    if(yearlyCost !== 0) {
      annualTripCost.innerText = `You have spent $${yearlyCost} on trips so far this year`
    } else {
        annualTripCost.innerText = `You have not taken any trips this year`
    }
  },

  displayTripCards(traveler, allDestinations, cardType) {
    let cardSection = document.getElementById('card-section')
    cardSection.innerHtml = '';

    if(traveler[cardType].length > 0) {
      traveler[cardType].forEach(trip => {
        const date = new Date(trip.date)
        const splitDate = date.toLocaleString('en-US').split(',');
        const formattedDate = splitDate[0]

        let cardInfo =
        `<section class="card">
          <div class= "image-section">
            <img class= "trip-image" src= "${trip.currentDestination.imgae}" alt = "${trip.currentDestination.alt}">
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
      allDestinationsList += `<option> value= "${destination.id}">${destination.destination}</option>`;
    });
    dropMenu.insertAdjacentHTML("beforeend", allDestinationsList);
  },

  unhideMainPage() {
    let mainPage = document.querySelector('.main-page')
    mainPage.classlist.remove('hidden')
  }
};
