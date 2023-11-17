function Solve(sentence, WordWeNeed) {

    let words = sentence.split(" ");
    let TimesInSentence = 0;

    for (let i = 0; i <= words.length - 1; i++) {

        if (words[i].endsWith(`is`) && words[i].length > 2) {
            continue;
        }

        if (words[i].includes(WordWeNeed)) {
            TimesInSentence++;
        }
    }

    console.log(TimesInSentence);

}