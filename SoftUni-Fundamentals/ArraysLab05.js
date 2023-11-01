function EvenOrOdd(arr) {

    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        arr[i] = Number(arr[i]);

        if (arr[i] % 2 == 0) {
            sum = sum + arr[i];
        }

    }
    console.log(sum)
}