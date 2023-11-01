function RightPlace(wrongWord, fix, rightWord) {

    let result = ``

    for (let i = 0; i < wrongWord.length; i++) {

        if (wrongWord[i] == `_`) {
            result = result + fix;
        } else {
            result = result + wrongWord[i];
        }

    }

    if (result == rightWord) {
        console.log(`Matched`);

    } else {
        console.log(`Not Matched`);
    }



}