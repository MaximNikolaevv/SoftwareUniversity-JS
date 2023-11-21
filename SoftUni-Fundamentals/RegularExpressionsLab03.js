function MatchDates([input]) {

    let pattern = /\b(?<day>\d{2})([-.?\/])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g;

    let result = pattern.exec(input);

    while (result != null) {

        let { day, month, year } = result.groups;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)

        result = pattern.exec(input);
    }


}