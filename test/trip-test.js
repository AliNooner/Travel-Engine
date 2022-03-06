import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trip';
import tripTestData from './test-datasets/trip-test-data';
// import destinationData from './test-datasets/destination-data';

describe('Trip test', () => {

  let tripData;

  beforeEach(() => {
    tripData = tripTestData.map(obj => new Trip(obj));
  })

  it('Should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('Should be an instance of a trip', () => {
    expect(tripData[0]).to.be.an('object');
    expect(tripData[0]).to.be.an.instanceOf(Trip);
  })

  it('Should have a trip ID', () => {
    expect(tripData[0].id).to.be.a('number');
    expect(tripData[0].id).to.equal(1);
  })

  it('Should have a user ID', () => {
    expect(tripData[1].userID).to.be.a('number');
    expect(tripData[1].userID).to.equal(35);
  })

  it('Should have a destination ID', () => {
    expect(tripData[0].destinationID).to.be.a('number');
    expect(tripData[0].destinationID).to.equal(49)
  })

  it('Should have a number of travelers', () => {
    expect(tripData[0].travelers).to.be.a('number');
    expect(tripData[0].travelers).to.equal(1)
  })

  it('Should have a start date', () => {
    expect(tripData[3].date).to.be.a('string');
    expect(tripData[3].date).to.equal('2022/02/25')
  })

  it('Should have a duration', () => {
    expect(tripData[0].duration).to.be.a('number');
    expect(tripData[0].duration).to.equal(8);
  })

  it('Should have a trip status', () => {
    expect(tripData[5].status).to.be.a('string');
    expect(tripData[5].status).to.equal('approved');
  })

  // it('Should have an array of suggested activities', () => {
    // expect(tripData[0].suggestedActivites).to.be.a('array');
    // expect(tripData[0].suggestedActivites).to.equal([];)
  // })
})
