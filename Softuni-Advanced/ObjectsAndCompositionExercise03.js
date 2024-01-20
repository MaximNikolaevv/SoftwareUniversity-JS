function Solve(CurrTypeCar) {

    let result = {
        model: CurrTypeCar.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined,
    }

    if (CurrTypeCar.power <= 90) {
        result.engine = { power: 90, volume: 1800 }
    } else if (CurrTypeCar.power <= 120) {
        result.engine = { power: 120, volume: 2400 }
    } else {
        result.engine = { power: 200, volume: 3500 }
    }



    if (CurrTypeCar.carriage == 'hatchback') {
        result.carriage = { type: 'hatchback', color: CurrTypeCar.color }
    } else {
        result.carriage = { type: 'coupe', color: CurrTypeCar.color }
    }



    if (CurrTypeCar.wheelsize % 2 == 0) {
        CurrTypeCar.wheelsize = CurrTypeCar.wheelsize - 1;

        result.wheels = new Array(4).fill(CurrTypeCar.wheelsize)

    } else {

        result.wheels = new Array(4).fill(CurrTypeCar.wheelsize)
    }

    return result;


}