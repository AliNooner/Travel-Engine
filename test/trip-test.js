import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trip';
import tripData from './test-datasets/trip-data';
import destinationData from './test-datasets/destination-data';


describe('Trip class', () => {
  let tripOne;

  beforeEach(() => {
    tripOne = new Trip(tripData[0], destinationData[6])
  })

  it('Should be a function', () => {
    expect(Trip).to.be.a('function');
  })
})
