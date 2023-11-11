function ConvertJson(firstname, lastname, haircolour) {

    let person = { name: firstname, lastName: lastname, hairColor: haircolour };



    person = JSON.stringify(person);


    console.log(person)

}