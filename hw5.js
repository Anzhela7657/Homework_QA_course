function myisNaN(value) {
    let result;
    if (typeof value === 'number') {
        result = value !== value;
    } else {
        // Спроба перетворити значення на число і перевірити, чи воно NaN
        const num = Number(value);
        result = num !== num;
    }
    console.log(result); // Вивід результату безпосередньо у функції
    return result;
}




myisNaN(NaN); // true
myisNaN(undefined); // true
myisNaN({}); // true

myisNaN(true); // false
myisNaN(null); // false
myisNaN(37); // false

// Strings
myisNaN("37"); // false: "37" is converted to the number 37 which is not NaN
myisNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
myisNaN("37,5"); // true
myisNaN("123ABC"); // true: Number("123ABC") is NaN
myisNaN(""); // false: the empty string is converted to 0 which is not NaN
myisNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

// Dates
myisNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
myisNaN(new Date().toString()); // true; the string representation of a Date object cannot be parsed as a number

// Arrays
myisNaN([]); // false; the primitive representation is "", which coverts to the number 0
myisNaN([1]); // false; the primitive representation is "1"
myisNaN([1, 2]); // true; the primitive representation is "1,2", which cannot be parsed as number
