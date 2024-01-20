function SplitCode(array) {

    let Number = 0;
    let mergedArr = [];

    MakeTheNum(array)

    function MakeTheNum(array) {

        for (let index = 0; index < array.length; index++) {
            Number++
            const element = array[index];

            if (element == "add") {

                mergedArr.push(Number)

            } else if (element == "remove") {
                mergedArr.pop();

            }

        }

    }

    if (mergedArr == 0) {
        console.log("Empty");
    }

    return mergedArr.join("\n");


}