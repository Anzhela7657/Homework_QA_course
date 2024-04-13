//HW1
let car = {
    make: "Mini",
    model: "Cooper", 
    year: 2012,
    color: "молочний",
    getInfo: function() {
      console.log(`Марка: ${this.make}`);
      console.log(`Модель: ${this.model}`);
      console.log(`Рік випуску: ${this.year}`);
      console.log(`Колір: ${this.color}`);
    },
    changeColor: function(newColor) {
      this.color = newColor;
      console.log(`Колір автомобіля змінено на ${newColor}`);
    }
  };
  
  car.getInfo();
  car.changeColor("червоний");
  car.getInfo();

  //HW2
  var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        var total = 0;
        for (var key in this) {
            if (typeof this[key] === 'string') {
                var price = parseInt(this[key]);
                if (!isNaN(price)) {
                    total += price;
                }
            }
        }
        return total + ' грн';
    },

    minPrice: function() {
        var min = Infinity;
        for (var key in this) {
            if (typeof this[key] === 'string') {
                var price = parseInt(this[key]);
                if (!isNaN(price) && price < min) {
                    min = price;
                }
            }
        }
        return min === Infinity ? 'немає послуг' : min + ' грн';
    },

    maxPrice: function() {
        var max = -Infinity;
        for (var key in this) {
            if (typeof this[key] === 'string') {
                var price = parseInt(this[key]);
                if (!isNaN(price) && price > max) {
                    max = price;
                }
            }
        }
        return max === -Infinity ? 'немає послуг' : max + ' грн';
    }
};

services['Розбити скло'] = "200 грн";

console.log('Загальна вартість: ', services.price()); 
console.log('Мінімальна вартість послуги: ', services.minPrice()); 
console.log('Максимальна вартість послуги: ', services.maxPrice()); 
