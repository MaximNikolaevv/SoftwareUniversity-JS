function SearchForNum(arr1, arr2) {

    let mergedArr = [];
    let count = 0;


    for (let i = 0; i <= arr2.length - 1; i++) {

        if (arr2[i] == arr2[0]) {

            for (let i = 0; i <= arr2[0]; i++) {
                let Num = arr1.shift()
                mergedArr.push(Num)
            }
            mergedArr.pop()
        }

        if (arr2[i] == arr2[1]) {

            for (let i = 1; i <= arr2[1]; i++) {

                mergedArr.shift()

            }

        }


        if (arr2[i] == arr2[2]) {

            if (mergedArr.includes(arr2[2])) {

                count++
            }
        }

    }


    console.log(`Number ${arr2[2]} occurs ${count} times.`)


}