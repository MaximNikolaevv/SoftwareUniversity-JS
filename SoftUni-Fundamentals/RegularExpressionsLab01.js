function Name(names) {


    let Pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = names.match(Pattern);

    console.log(result.join(` `));



}