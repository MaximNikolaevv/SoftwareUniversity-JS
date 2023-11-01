function readingbooks(PagesPerBook, PagesInHour, Days) {

    let TimeToReadBook = PagesPerBook / PagesInHour;
    let RequiredHours = TimeToReadBook / Days;

    console.log(RequiredHours);

}