function solve(arr, rotationcount) {


    for (let rotation = 1; rotation <= rotationcount; rotation++) {

        let firstEL = arr.shift();

        arr.push(firstEL);
    }


    console.log(arr.join(` `))


}