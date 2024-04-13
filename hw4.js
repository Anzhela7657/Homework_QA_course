//HW1
// Спосіб 1
function triangle(height, symbol) {
    let height_ = 1;
    let width_ = 1;

    while (height_ <= height) {
        let output = '';
        while (width_ <= height_) {
            output += symbol;
            width_++;
        }
        console.log(output);
        height_++;
        width_ = 1;
    }
}

triangle(5, '=');

// Спосіб 2
function triangle2(height2, symbol2) {
    for (let i = 1; i <= height2; i++) {
        let output = '';
        for (let j = 1; j <= i; j++) {
            output += symbol2;
        }
        console.log(output);
    }
}

triangle2(5, '+');


//HW2
function sum_of_number() {
    let sum = 0;
    for (let x = 1; x <= 100; x++) {
        if (x % 3 !== 0) {
            sum += x;
        }
    }
    return sum;
}
console.log('Сума чисел від 1 до 100, які не кратні 3: ' + sum_of_number());


//HW3
function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2, 3)); 
