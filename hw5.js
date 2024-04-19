//HW1
function myisNaN(value) {
    let result;
    if (typeof value === 'number') {
        result = value !== value;
    } else {
        const num = Number(value);
        result = num !== num;
    }
    console.log(result); 
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


//HW2

function pad(arg1, arg2, arg3, arg4) {
    if (arg1.length >= arg3) {
      return arg1;
    }
      const padSize = arg3 - arg1.length;
      let result = '';
    for (let i = 0; i < padSize; i++) {
      result += arg2[i % arg2.length];
    }
      if (arg4) {
      return result + arg1;
    } else {
      return arg1 + result;
    }
  }

console.log(pad("abc", " ", 10, true)); // " abc"
console.log(pad("abc", "foo", 10, true)); // "foofoofabc"
console.log(pad("abc", "123465", 6, true)); // "123abc"
console.log(pad("abc", "0", 8, true)); // "00000abc"
console.log(pad("abc", " ", 1, true)); // "abc"


//HW3

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function isEven(num) {
    return num % 2 === 0;
  }
  function ProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
      const randomNumber = getRandom(100, 1000);
      if (isEven(randomNumber)) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = (oddCount / count) * 100;
  
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток непарних: ${oddPercentage.toFixed(2)}%`);
  }
  
  // Виклик функції
  ProbabilityTheory(1000);