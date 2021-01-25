const url = 'https://restcountries.eu/rest/v2/all';


const fetchData = async() => {
  try{
    const response = await fetch(url);
    const countries = await response.json();
   // console.log(countries)
   let arr = []
    for(country of countries){
      console.log("Name: " + country.name +" Area: " + country.area)
      arr.push(country.area);
      arr.sort(function(a,b){
          return b -a;
      })
    }
    let newArr = arr.splice(0, 10);
    for(country of countries){
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i] === country.area){
                console.log((i + 1) + "." + country.name)
            }
        }
    }
    
  } catch(err){
    console.log(err)
  }
}

console.log("-----Question3b-----");
fetchData();
