class Trip {
  constructor(tripData, destinationData) {
    this.tripID = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.numberOfTravelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivites = tripData.suggestedActivites;
    this.endDate;
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

  findEndDate() {
    this.date = newDate(this.date).getTime();
    let durationInMili = this.duration * 86400000;
    this.endDate = this.date + durationInMili;
  }

}








export default Trip;
