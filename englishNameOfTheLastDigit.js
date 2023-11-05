function englishNameOfTheLastDigit(number) {

    let numAsString = String(number);
    let lastNumber = numAsString[numAsString.length - 1];
    let numInWords = "";

    if (lastNumber === "0") {
        numInWords = "zero";
    } else if (lastNumber === "1") {
        numInWords = "one";
    } else if (lastNumber === "2") {
        numInWords = "two";
    } else if (lastNumber === "3") {
        numInWords = "three";
    } else if (lastNumber === "4") {
        numInWords = "four";
    } else if (lastNumber === "5") {
        numInWords = "five";
    } else if (lastNumber === "6") {
        numInWords = "six";
    } else if (lastNumber === "7") {
        numInWords = "seven";
    } else if (lastNumber === "8") {
        numInWords = "eight";
    } else if (lastNumber === "9") {
        numInWords = "nine";
    }

    console.log(numInWords);

}

englishNameOfTheLastDigit(512);