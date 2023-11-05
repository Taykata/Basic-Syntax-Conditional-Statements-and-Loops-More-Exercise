function nextDay(year, month, day) {

    if (year === 1) {
        year = 1901;
    }

    day += 1;

    if ((day > 31 && month === 1) || (day > 31 && month === 3) || (day > 31 && month === 5) || (day > 31 && month === 7) || (day > 31 && month === 8) || (day > 31 && month === 10) || (day > 31 && month === 12)) {
        day = 1;
        month += 1;
    }

    if ((day > 30 && month === 2) || (day > 30 && month === 4) || (day > 30 && month === 6) || (day > 30 && month === 9) || (day > 30 && month === 11)) {
        day = 1;
        month += 1;
    }

    if (month > 12) {
        month = 1;
        year += 1;
    }

    console.log(`${year}-${month}-${day}`);
    
}

nextDay(2016, 9, 30);