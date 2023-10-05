function literatura(input) {

    numofpages = Number(input[0]);
    pages = Number(input[1]);
    numofdays = Number(input[2]);

    timeforreadingabook = numofpages / pages
    neededhouraday = timeforreadingabook / numofdays

    console.log(neededhouraday)

}