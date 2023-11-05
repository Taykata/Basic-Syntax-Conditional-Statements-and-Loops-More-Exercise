function reverseString(word) {

    wordAsString = String(word);
    let buff = "";

    for (let i = wordAsString.length - 1; i >= 0; i--) {
        buff += wordAsString[i];
    }

    console.log(buff);

}

reverseString("Hello");