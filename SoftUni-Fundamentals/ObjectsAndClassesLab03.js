function objConverter(json) {

    let person = JSON.parse(json);

    let entries = Object.entries(person);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }


}