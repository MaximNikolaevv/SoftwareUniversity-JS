function Name([PhoneNum]) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g

    let result = PhoneNum.match(pattern);

    console.log(result.join(", "));

} 