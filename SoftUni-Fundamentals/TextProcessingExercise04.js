function StringSubstring(SearchedWord, sentence) {

    sentence = sentence.split(" ");

    for (let word of sentence) {

        word = word.toLowerCase();

        if (word == SearchedWord) {

            console.log(SearchedWord);
            break

        } else if (!sentence.includes(SearchedWord)) {

            console.log(`${SearchedWord} not found!`);
            break
        }

    }

}