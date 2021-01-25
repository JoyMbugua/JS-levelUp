const url = 'https://api.thecatapi.com/v1/breeds';

const catsData = async () => {
    try{
        const results = await fetch(url);
        const cats = await results.json();
        console.log(cats)
        for(cat of cats){
            //access the weight of each
            const {weight:catWeight}=cat
            let newWeights = catWeight.metric;

            //split the metric weights
            let stringified = newWeights.split("");
            let part1 = Number(stringified[0]);
            let part2 = Number(stringified[stringified.length-1]);
            
            //get the average
            let total = part1 + part2;
            let avg = total / 2;
            console.log("The average weight of " + cat.name + " is " + avg + "kg")
            
        }
    } catch(err) {
        console.log(err)
    }
}
console.log("-----Question3a-----");
catsData()