function password(input) {

    let index = 0;


    let name = input[index];
    index++;

    let password = input[index];
    index++;

    let triedpassword = input[index];

    while (triedpassword !== password) {
        triedpassword = input[index];
        index++
    }

    console.log(`Welcome ${name}!`)


} 