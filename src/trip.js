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
}








export default Trip;
