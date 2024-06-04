function solve() {

    let text = document.getElementById("text")
    let NameConvetion = document.getElementById("naming-convention")
    let result = document.getElementById("result");
  
    if (NameConvetion.value == "Camel Case") {
  
      const output = text.value
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
          if (+match === 0) return "";
          return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
  
      result.textContent = output;
  
    } else if (NameConvetion.value == "Pascal Case") {
  
      const input = text.value
  
  
      const lowerCaseInput = input
        .toLowerCase()
        .replace(/\b\w/g, (match) => match.toUpperCase()).replace(/\s+/g, '');
  
      result.textContent = lowerCaseInput;
  
  
    } else {
  
      result.textContent = "Error!";
  
    }
  
  }
