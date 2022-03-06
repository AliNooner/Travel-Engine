export const domUpdates = {

  greetUser(traveler) {
    const greetingMessage = document.getElementById('.greeting');
    const firstName = traveler.name.split(''[0]);
    greetingMessage.innerText = `Welcome, ${firstName}!`;
  }

  displayYearlyTripCost(traveler) {
    const annualTripCost = document.getElementById('annual-spending');
    const yearlyCost = traveler.calculateAmountSpentThisYear();

    if(yearlyCost !== 0) {
      annualTripCost.innerText = `You have spent $${yearlyCost} on trips so far this year`
    } else {
        annualTripCost.innerText = `You have not taken any trips this year`
    }
  }

  }

  // createDropMenu(destinationData) {
  //   const dropMenu = document.getElementById("trip-destination");
  //
  //   let allDestinationsList = "";
  //   destinationData.forEach((destination) => {
  //     allDestinationsList += `<option> value= "${destination.id}">${destination.destination}</option>`;
  //   });
  //   dropMenu.insertAdjacentHTML("beforeend", allDestinationsList);
  // },
};
