function citizen(city) {

    city = Object.entries(city);

    for (let [key, value] of city) {

        console.log(`${key} -> ${value}`);
    }


}