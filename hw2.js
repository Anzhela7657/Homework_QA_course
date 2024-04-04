var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['age'], function (err, result) {
    let age = Number(result.age);

    if (age === 1 || age === 21 || age === 31 || age === 41 || age === 51 || age === 61 || age === 71 || age === 81 || age === 91 || age === 101) {
        console.log('age: ' + result.age + " рік");
    } else if (age % 10 >= 2 && age % 10 <= 4 && age < 102)  {
        console.log('age: ' + result.age + " роки");
    } else if (age < 102 && age > 0) {
        console.log('age: ' + result.age + " років");
    } else {
        console.log('Стільки років не існує');
    }
});