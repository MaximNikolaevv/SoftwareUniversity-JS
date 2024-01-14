function BiggerHalf(arr) {

    let BigAndBiggerNum = [];
    let HalfOfTheLength = 0;
    let mergedArr = [];
    let index = 0;

    let result = FindBiggerHlaf(arr)

    function FindBiggerHlaf(arr) {

        for (let writtenCode = 0; writtenCode < 1; writtenCode++) {
            let element = Number(arr[index]);

            BigAndBiggerNum = arr.sort((a, b) => a - b);

            HalfOfTheLength = arr.length / 2;

            if (HalfOfTheLength % 2 != 0) {
                HalfOfTheLength = HalfOfTheLength + 1;
                HalfOfTheLength = Math.floor(HalfOfTheLength);
                BigAndBiggerNum.reverse()
                writtenCode++

                while (index != HalfOfTheLength) {

                    let CurrNum = BigAndBiggerNum.shift()

                    mergedArr.unshift(CurrNum)

                    index++

                }

                return mergedArr;

            } else {

                writtenCode++

                BigAndBiggerNum.reverse()

                while (index != HalfOfTheLength) {

                    let CurrNum = BigAndBiggerNum.shift()

                    mergedArr.unshift(CurrNum)


                    index++
                }

                return mergedArr;

            }

        }

    }

    return result;

}
