// <<<>>> IMPORTS <<<>>>

// <<<>>> GLOBAL VARIABLES <<<>>>

// <<<>>> QUERY SELECTORS <<<>>>

// <<<>>> EVENT HANDLERS <<<>>>

const getAllData = (userID)  => {
  let getTravelerData = fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  let getTripData = fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  let getDestinationData = fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  let getSingleTravelerDara = fetch('http://localhost:3001/api/v1/travelers/${userID}')
  .then(response => response.json())
}
