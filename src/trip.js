class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.endDate;
    this.currentDestination;
    this.totalTripCost;
  }

  calculateTripCost() {
    const totalLodgingCost =
      this.currentDestination.estimatedLodgingCostPerDay *
      (this.duration / 86400000);
    const totalFlightCost =
      this.currentDestination.estimatedFlightCostPerPerson * this.travelers * 2;
    const totalTripCost = 1.1 * (totalLodgingCost + totalFlightCost);
    this.tripCost = totalTripCost;
    return totalTripCost;
  }

  findEndDate() {
    this.date = new Date(this.date).getTime();
    let durationInMili = this.duration * 86400000;
    this.endDate = this.date + durationInMili;
  }
}

export default Trip;
