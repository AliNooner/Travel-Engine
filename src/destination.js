class Destination {
  constructor(destinationData) {
    this.destinationID = destinationData.id;
    this.destinationLocation = destinationData.destination;
    this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson;
    this.image = destinationData.image;
    this.alt = destinationData.alt;
  }
}








export default Destination;
