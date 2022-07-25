const url =  'https://restcountries.com/v3.1/all';

const getData = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    //1. Get all the countries from the Asia continent /region using the Filter function
    console.log(data.filter(country => country.region === 'Asia'));

    // 2. Get all the countries with a population of less than 2 lakhs using Filter function
    console.log(data.filter(country => country.population < 200000));

    // 3. Print the following details name, capital, flag using forEach function
    data.forEach(country =>{
        console.log({
            name: country.name.common,
            capital: country.capital,
            flag: country.flag,
        });
    })

    // 4. Print the total population of countries using reduce function
    console.log(data.map(s => s.population).reduce((acc, crr) => acc + crr, 0));

    // 5. Print the country which uses US Dollars as currency.
    console.log(data.filter(country => country.currencies?.USD));
}
getData(url);