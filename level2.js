const url = 'https://api.thecatapi.com/v1/breeds';

const catsData = async () => {
    try{
        const results = await fetch(url);
        const cats = await results.json();
        console.log(cats)
        for(cat of cats){
            const {name:catName}=cat
            console.log(catName)
        }
    } catch(err) {
        console.log(err)
    }
}
catsData()