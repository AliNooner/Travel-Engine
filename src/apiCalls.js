export const fetchAPIData = (type) => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
  .then(response => response.json())
  .catch(error => console.log('error: ', error))
}

export const postAPIData = (newTrip) => {
  return fetch ('http://localhost:3001/api/v1/',
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newTrip),
    })
    .then(response => response.json())
    .then(json => console.log())
    .catch(err => 'ERROR')
}
