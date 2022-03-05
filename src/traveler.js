

class Traveler {
  constructor(travelerData) {
    this.travelerID = travelerData.id;
    this.travelerName = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.trips = [];
    this.tripsThisYear = [];
    this.totalSpentThisYear = [];
  }
}








export default Traveler;
