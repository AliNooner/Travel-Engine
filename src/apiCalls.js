const getAllData = (url)  => {
  let getTravelerData = fetch(url)
  .then(response => response.json())
  return getTravelerData;
};


export default getAllData
