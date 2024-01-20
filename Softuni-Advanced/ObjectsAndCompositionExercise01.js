function CalorieObject(arr) {

    let Object = {};


    for (let i = 0; i <= arr.length - 1; i++) {

        let [products] = arr[i].split(" ");
        let [calories] = arr[i + 1].split(" ");


        Object[products] = Number(calories)

        i++
    }

    return Object;


} 