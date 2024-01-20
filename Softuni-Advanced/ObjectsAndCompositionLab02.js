function Objects(arr) {

    let TownsAndPopulation = {};


    for (let i = 0; i <= arr.length - 1; i++) {

        let [Town, population] = arr[i].split("<->");

        population = Number(population);


        if (TownsAndPopulation.hasOwnProperty(Town)) {

            TownsAndPopulation[Town] += population

        } else {

            TownsAndPopulation[Town] = population;

        }

    }

    for (let element in TownsAndPopulation) {

        console.log(`${element}: ${TownsAndPopulation[element]}`);
    }





}