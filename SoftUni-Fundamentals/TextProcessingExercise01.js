function RevealWords(word, sentence) {

    let index = 0;
    sentence = sentence.split(' ');
    word = word.split(' ');
 

    for (let i = 0; i <= sentence.length - 1; i++) {
        let wordsInSentence = sentence[i];

        if (index == word.length){
            break;
        }

        if (word[index].endsWith(',')) {
            word[index] = word[index].slice(0, -1);
        }
    

        let AsciiNum = wordsInSentence.charCodeAt();

        if (AsciiNum == 42 && wordsInSentence.length == word[index].length) {

            sentence = sentence.join(' ');
            sentence = sentence.replace(wordsInSentence, word[index]);
            sentence = sentence.split(' ');
            index++
        }

    }

    console.log(sentence.join(' '));

}

// Not fully right! 