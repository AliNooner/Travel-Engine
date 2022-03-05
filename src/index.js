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
  let getSingleTravelerData = fetch('http://localhost:3001/api/v1/travelers/${userID}')
  .then(response => response.json())

  Promise.all([getTravelerData, getTripData, getDestinationData, getSingleTravelerDara])
  .then(data => createDatasets(data[0], data[1], data[2], data[3]))
  .catch(error => window.alert("Oops! Something went wrong!"))
}

// create a function that assigns data sets to variables for each data set
