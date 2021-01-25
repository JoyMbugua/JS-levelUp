const url = 'https://restcountries.eu/rest/v2/all';


const fetchData = async() => {
  try{
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries)
    let arr = [];
    for(country of countries){
        console.log(country.name + " Official Language: " + country.languages[0].name)
        let lang = country.languages[0].name;
        arr.push(lang)
    }
    console.log(arr)
    const uniq = [...new Set(arr)];
    console.log("There are " + uniq.length + " official languages used around the world.")
  } catch(err){
    console.log(err)
  }
}

console.log("-----Question3c-----");
fetchData();
