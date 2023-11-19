function HashTag(sentence) {
    sentence = sentence.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];

        if (word.startsWith('#') && word.length > 1) {

            let isSpecialWord = /^[a-zA-Z]+$/.test(word.slice(1));

            if (isSpecialWord) {
                console.log(word.slice(1));
            }
        }
    }
}