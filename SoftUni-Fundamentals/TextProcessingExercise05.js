function Letters(letter) {

    letter = letter.split("");
    let letters = [];

    for (let i = 0; i <= letter.length - 1; i++) {
        let Letter1 = letter[i];
        let letter2 = letter[i + 1];

        if (Letter1 == letter2) {
            continue;
        } else {
            letters.push(Letter1);
        }
    }

    console.log(letters.join(""));

}