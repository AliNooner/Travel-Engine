import Trip from "./trip"

class Traveler {
  constructor(travelerData) {
    this.travelerID = travelerData.id;
    this.travelerName = travelerData.name;
    this.travelerType = travelerData.travelerType;
    // this.trips = [];
    // this.tripsThisYear = [];
    // this.totalSpentThisYear = [];
    this.currentDate = new Date().getTime()
    this.allTrips = [];
    this.pastTrips = [];
    this.currentTrips = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
  }

  // calculateAnnualCost() {
  //   let totalAnnualCost = this.tripsThisYear.reduce((acc, currTrip) => {
  //     acc += currTrip.
  //   })
  // }

  findAllTrips(tripData, destinationData) {
    let filteredTrips = tripData.filter(trip => trip.userID === this.travelerID);
    let currentDestination;
    filteredTrips.forEach(trip => {
      destinationData.forEach(destination => {
        if(trip.destinationID === destination.id) {
          trip.currentDestination = destination;
          this.allTrips.push(trip)
        }
      })
    })
    return this.allTrips;
  }

  findPastTrips() {
    this.pastTrips = this.allTrips.filter(trip => {
      trip.findEndDate();
      if(this.currentDate > trip.endDate && !this.pastTrips.includes(trip)) {
        return trip;
      }
    })
  }

  findCurrentTrips() {
    this.currentTrips = this.allTrips.filter(trip => {
      trip.findEndDate();
      if(this.currentDate < trip.endDate && this.currentDate > trip.date && !this.currentTrips.includes(trip)) {
        return trip;
      }
    })
  }

}








export default Traveler;
