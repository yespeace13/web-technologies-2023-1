class Pizza {

    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.toppings = [];
        this.size = null;
        this.stuffing = null;
    }

    addTopping(topping) {
        // Добавить добавку 
        this.toppings.push(topping);
    };

    removeTopping(topping) {
        // Убрать добавку 
        const index = this.toppings.indexOf(topping);
        if (index !== -1) {
            this.toppings.pop();
        }
    }

    getToppings(topping) {
        // Получить список добавок
        return this.toppings;
    }

    getSize() {
        // Узнать вид пиццы
        return this.size;
    }

    getStuffing() {
        // Узнать размер пиццы 
        return this.stuffing;
    }

    calculatePrice() {
        // Узнать цену
        let finalPrice = this.size === sizes.BIG ? this.price + 200 : this.price + 100;
        this.toppings.forEach(topping => {
            finalPrice += (topping.types.find(type => type.size === this.size)).price
        });
        return finalPrice;
    }

    calculateCalories() {
        // Узнать калорийность
        let finalCalories = this.size === sizes.BIG ? this.calories + 200 : this.calories + 100;
        this.toppings.forEach(topping => {
            finalCalories += (topping.types.find(type => type.size === this.size)).calories
        });
        return finalCalories;
    }

}

class Topping {
    constructor(name, types) {
        this.name = name;
        this.types = types;
    }
}

class TypeTopping {
    constructor(size, price, calories) {
        this.size = size;
        this.price = price;
        this.calories = calories;
    }
}

const sizes = { BIG: 'Большая', SMALL: 'Маленькая' };

const pizzies = {
    margarita: new Pizza("Маргарита", 500, 300),
    pepperoni: new Pizza("Пепперони", 800, 400),
    bavarskaya: new Pizza("Баварская", 700, 450)
};


const toppings = {
    CREAMY_MOZARELLA: new Topping("Cливочная моцарелла", [new TypeTopping(sizes.BIG, 50, 20), new TypeTopping(sizes.SMALL, 50, 20)]),
    CHEESE_FOREST: new Topping("Сырный борт", [new TypeTopping(sizes.SMALL, 150, 50), new TypeTopping(sizes.BIG, 300, 50)]),
    CHEDDAR_AND_PARMESAN: new Topping("Чедер и пармезан", 700, 450, [new TypeTopping(sizes.SMALL, 150, 50), new TypeTopping(sizes.BIG, 300, 50)]),
};


const pizza = pizzies.margarita;
pizza.size = sizes.SMALL;
pizza.addTopping(toppings.CREAMY_MOZARELLA)
pizza.addTopping(toppings.CHEESE_FOREST)

console.log(pizza.calculatePrice()); //800
console.log(pizza.calculateCalories()); //470