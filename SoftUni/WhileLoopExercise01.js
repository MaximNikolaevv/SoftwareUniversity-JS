function library(input) {

    let index = 0;

    let wantedbook = input[index];
    index++;

    let searchedboooks = 0;

    let command = input[index];
    index++

    while (command !== "No More Books") {
        if (command === wantedbook) {
            console.log(`You checked ${searchedboooks} books and found it.`)
            break;
        }

        searchedboooks++
        command = input[index]
        index++;

        if (command === "No More Books") {
            console.log(`The book you search is not here!`)
            console.log(`You checked ${searchedboooks} books.`)
        }

    }


}