
const url = 'https://restcountries.eu/rest/v2/regionalbloc/au';

//fetch(url).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))

const fetchData = async() => {
  try{
    const response = await fetch(url);
    const countries = await response.json();
   // console.log(countries)
    for(country of countries){
      console.log("Name: " + country.name +" City: " + country.capital + " Population: " + country.population)
    }
  } catch(err){
    console.log(err)
  }
}

console.log("------async and await-----");
fetchData();
