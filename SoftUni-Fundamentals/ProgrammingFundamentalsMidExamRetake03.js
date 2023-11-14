function Numbers(arr) {

    arr = arr.split(" ");
    let AverageNum = 0;
    let FullNum = 0;
    let mergedArr = [];

    if (arr.length == 1) {
        console.log("No");
        return;
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        let CurrentNum = Number(arr[i]);
        FullNum = FullNum + CurrentNum;

    }

    AverageNum = FullNum / arr.length;
    arr.reverse();

    for (let index = 0; index <= arr.length - 1; index++) {
        let CurNum = Number(arr[index]);

        if (AverageNum <= CurNum) {
            mergedArr.push(CurNum);
        }

    }

    mergedArr = mergedArr.sort((a, b) => b - a).slice(0, 5);

    console.log(mergedArr.join(" "));


} Numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')