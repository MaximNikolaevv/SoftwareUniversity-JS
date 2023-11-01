function solve(num, array) {

    let arr = [];
    let output = ""

    for (let i = 0; i < num; i++) {
        arr.push(array[i])

    }
    for (let i = arr.length - 1; i >= 0; i--) {

        output = output + `${arr[i]} `



    }

    console.log(output);

} 