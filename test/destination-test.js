import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/destination';
import destinationTestData from './test-datasets/destination-test-data';

describe('Destination class', () => {

  let destinationOne, destinationTwo;

  beforeEach(() => {
    destinationOne = new Destination(destinationTestData[0]);
    destinationTwo = new Destination(destinationTestData[1]);
  })

  it('Should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('Should be an instance of Destination', () => {
    expect(destinationOne).to.be.an.instanceOf(Destination);
  })

  it('Should be a new instance of Destination', () => {
    expect(destinationTwo).to.be.an.instanceOf(Destination);
  })

  it('Should have an ID', () => {
    expect(destinationOne.destinationID).to.equal(1);
  })

  it('Should have a location', () => {
    expect(destinationOne.destinationLocation).to.equal('Lima, Peru');
    expect(destinationTwo.destinationLocation).to.equal('Stockholm, Sweden');
  })

  it('Should have an estimated lodging cost per day', () => {
    expect(destinationOne.estimatedLodgingCostPerDay).to.equal(70);
  })

  it('Should have an estimated flight cost per person', () => {
    expect(destinationOne.estimatedFlightCostPerPerson).to.equal(400);
  })

  it('Should have an image', () => {
    expect(destinationOne.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  })

  it('Should have alt text for the image', () => {
    expect(destinationOne.alt).to.equal("overview of city buildings with a clear sky");
  })
});
