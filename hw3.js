var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['unit_of_measure', 'number'], function (err, result) {
    let unit_of_measure = String(result.unit_of_measure);
    let number = Number(result.number);

    if (isNaN(number)) {
        console.log('Введіть число');
    } else if (number < 0) {
        console.log('Введіть додатне число');
    } else {
        switch (unit_of_measure) {
            case 'км':
                console.log(number + ' км = ' + number * 1000 + ' м');
                break;
            case 'год':
                console.log(number + ' год = ' + number * 60 + ' хв');
                break;
            case 'кг':
                console.log(number + ' кг = ' + number * 1000 + ' г');
                break;
            default:
                console.log('Невідома одиниця виміру');
        }
    }
});
