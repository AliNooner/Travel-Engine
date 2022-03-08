import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import travelerTestData from './test-datasets/traveler-test-data';
import tripTestData from './test-datasets/trip-test-data';
import destinationTestData from './test-datasets/destination-test-data';

describe('Traveler test', () => {
  let travelerData;
  let tripData;

  beforeEach(() => {
    travelerData = travelerTestData.map(obj => new Traveler(obj));
  })

  it('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('Should be an instance of a traveler', () => {
    expect(travelerData[0]).to.be.an('object');
    expect(travelerData[0]).to.be.an.instanceOf(Traveler);
  })

  it('Should have a traveler ID', () => {
    expect(travelerData[0].id).to.be.a('number');
    expect(travelerData[0].id).to.equal(1);
  })

  it('Should have a name', () => {
    expect(travelerData[0].name).to.be.a('string');
    expect(travelerData[0].name).to.equal('Ham Leadbeater');
  })

  it('Should have a type', () => {
    expect(travelerData[0].type).to.be.a('string');
    expect(travelerData[0].type).to.equal('relaxer');
  })

  it('Should have a current date', () => {
    expect(travelerData[0].currentDate).to.not.equal(undefined);
  })

it('should create a list of all trips for a traveler based on their ID', () => {
   tripData = tripTestData.map(object => new Trip(object));
   travelerData[2].findAllTrips(tripData, destinationTestData);
   expect(travelerData[2].allTrips).to.be.a('array');
   expect(travelerData[2].allTrips).to.deep.equal([{
     "id":3,
     "userID":3,
     "destinationID":22,
     "travelers":4,
     "date":"2022/05/22",
     "duration":17,
     "status":"approved",
     "suggestedActivities":[],
     'currentDestination': {
        'id': 22,
        'destination': 'Miami, Florida',
        'estimatedLodgingCostPerDay': 158,
        'estimatedFlightCostPerPerson': 275,
        'image': 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1573&q=80',
        'alt': 'sand with palm trees and tall buildings in the background'
      }
   }])
  })

  it('should create a list of past trips', () => {
    tripData = tripTestData.map(object => new Trip(object));
    travelerData[3].findAllTrips(tripData, destinationTestData);
    travelerData[3].findPastTrips();
    expect(travelerData[3].pastTrips).to.be.a('array');
    expect(travelerData[3].pastTrips).to.deep.equal([{
    "id":4,
    "userID":4,
    "destinationID":14,
    "travelers":2,
    "date":1582610400000,
    "duration":10,
    "status":"approved",
    "suggestedActivities":[],
    "endDate": 1583474400000,
    'currentDestination': {
      'id': 14,
      'destination': 'Marrakesh, Morocco',
      'estimatedLodgingCostPerDay': 70,
      'estimatedFlightCostPerPerson': 830,
      'image': 'https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
      'alt': 'people buying oranges and other fruit from a street vendor'
     }
    }])
  });


it('should create a list of pending trips', () => {
  tripData = tripTestData.map(object => new Trip(object));
  travelerData[8].findAllTrips(tripData, destinationTestData);
  travelerData[8].findPendingTrips();
  expect(travelerData[8].pendingTrips).to.be.a('array');
  expect(travelerData[8].pendingTrips).to.deep.equal([{
  'id': 9,
  'userID': 9,
  'destinationID': 19,
  'travelers': 5,
  'date': '2022/12/19',
  'duration': 19,
  'status': 'pending',
  'suggestedActivities': [],
  'currentDestination': {
    'id': 19,
    'destination': 'Bangkok, Thailand',
    'estimatedLodgingCostPerDay': 35,
    'estimatedFlightCostPerPerson': 988,
    'image': 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    'alt': 'ornate buildings with a garden during the day'
    }
  }])
})

it('should create a list of upcoming trips', () => {
    tripData = tripTestData.map(object => new Trip(object));
    travelerData[8].findAllTrips(tripData, destinationTestData);
    travelerData[8].findUpcomingTrips();
    expect(travelerData[8].upcomingTrips).to.be.a('array');
    expect(travelerData[8].upcomingTrips).to.deep.equal([{
    'id': 9,
    'userID': 9,
    'destinationID': 19,
    'travelers': 5,
    'date': 1671429600000,
    'duration': 19,
    'status': 'pending',
    'suggestedActivities': [],
    'endDate': 1673071200000,
    'currentDestination': {
      'id': 19,
      'destination': 'Bangkok, Thailand',
      'estimatedLodgingCostPerDay': 35,
      'estimatedFlightCostPerPerson': 988,
      'image': "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      'alt': 'ornate buildings with a garden during the day'
      }
    }])
  })

  it('should create a list of current trips', () => {
    tripData = tripTestData.map(object => new Trip(object));
    travelerData[4].findAllTrips(tripData, destinationTestData)
    travelerData[4].findCurrentTrips();
    expect(travelerData[4].currentTrips).to.be.a('array');
    expect(travelerData[4].currentTrips).to.deep.equal([{
    'id': 12,
    'userID': 5,
    'destinationID': 33,
    'travelers': 6,
    'date': 1646546400000,
    'duration': 16,
    'status': 'approved',
    'suggestedActivities': [],
    'endDate': 1647928800000,
    'currentDestination': {
      'id': 33,
      'destination': 'Quito, Ecuador',
      'estimatedLodgingCostPerDay': 60,
      'estimatedFlightCostPerPerson': 500,
      'image': 'https://images.unsplash.com/photo-1501684691657-cf3012635478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
      'alt': 'a city at night with cloudy, snowy mountains in the distance'
    }
  }])
});

  it('should calculate the amount spent on trips in the current year', () => {
   tripData = tripTestData.map(object => new Trip(object));
   travelerData[9].findAllTrips(tripData, destinationTestData);
   expect(travelerData[9].calculateAmountSpentThisYear()).to.be.a('string');
   expect(travelerData[9].calculateAmountSpentThisYear()).to.equal('8580.00')
 })


})
