import Trip from "./trip"

class Traveler {
  constructor(travelerData, today) {
    this.id= travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
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
    let filteredTrips = tripData.filter(trip => (trip.userID === this.id))
    console.log(filteredTrips, 'filtered')
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
    // console.log(this.allTrips, 'hereeee!')
    this.pastTrips = this.allTrips.filter(trip => {
      trip.findEndDate();
      if(this.currentDate > trip.endDate && !this.pastTrips.includes(trip)) {
        return trip;
        // this.pastTrips.push(trip)
      }
      console.log(this.pastTrips, 'past trips')
    })
    // return this.pastTrips;
  }

  findCurrentTrips() {
    this.currentTrips = this.allTrips.filter(trip => {
      trip.findEndDate();
      if(this.currentDate < trip.endDate && this.currentDate > trip.date && !this.currentTrips.includes(trip)) {
        return trip;
      }
    })
  }

  findPendingTrips() {
    this.pendingTrips = this.allTrips.filter(trip => trip.status === "pending");
    return this.pendingTrips;
  }
  //
  // findPendingTrips() {
  //   this.pendingTrips = this.allTrips.filter(trip => {
  //     if(trip.status === "pending") {
  //       this.pendingTrips.push(trip)
  //     }
  //     return this.pendingTrips;
  //   })
  // }

  findUpcomingTrips() {
    this.upcomingTrips = this.allTrips.filter(trip => {
      trip.findEndDate();
      if(trip.date > this.currentDate && !this.upcomingTrips.includes(trip)) {
        return trip;
      }
    })
  }

  sortTrips() {
    this.findPastTrips();
    this.findCurrentTrips();
    this.findPendingTrips();
    this.findUpcomingTrips();
  }

  calculateAmountSpentThisYear() {
    const thisYearsTrips = this.allTrips.filter(trip => {
      trip.findEndDate();
      if(trip.date > (new Date('2020/01/01').getTime())) {
        return trip;
      }
    })
    const annual = thisYearsTrips.reduce((sum, trip) => {
      sum += trip.calculateTripCost()
      return parseInt(sum).toFixed(2);
    }, 0)
    console.log(annual, 'annual')
    return annual;
  }
};








export default Traveler;
