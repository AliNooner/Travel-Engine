class Trip {
  constructor(tripData, destinationData) {
    this.tripID = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.numberOfTravelers = tripData.travelers;
    this.departureData = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivites = tripData.suggestedActivites;
    this.destinationDetails = destination;
  }

  calculateTripCost() {
    const lodgingCost = this.destinationDetails.estimatedLodgingCostPerDay * this.duration;
    const flightCost = this.destinationData.flightCostPerPerson * this.numberOfTravelers;
    const costTotal = lodgingCost + flightCost;
    const travelAgentFee = costTotal * .1
    this.totalTripFee = costTotal + travelAgentFee;
    return this.totalTripFee;
  }

}








export default Trip;
