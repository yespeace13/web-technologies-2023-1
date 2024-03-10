class Pizza {

    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.toppings = new Set();
        this.size = null;
        this.stuffing = null;
    }

    addTopping(topping) {
        // Добавить добавку 
        this.toppings.add(topping);
    };

    removeTopping(topping) {
        // Убрать добавку 
        this.toppings.delete(topping);
    }

    setSize(size) {
        this.size = size
    }

    getToppings() {
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
    CHEDDAR_AND_PARMESAN: new Topping("Чедер и пармезан", [new TypeTopping(sizes.SMALL, 150, 50), new TypeTopping(sizes.BIG, 300, 50)]),
};

var pizza;

function createPizza(name) {
    pizza = pizzies[name];
    var size = document.querySelector('input[name="size"]:checked').value;
    pizza.size = sizes[size];
    updatePrice();
}

function changeSize() {
    if (pizza.size === sizes.SMALL) {
        pizza.setSize(sizes.BIG);
    } else {
        pizza.setSize(sizes.SMALL);
    }
    updatePrice();
}

function addTopping(name) {
    if (pizza === undefined) return;
    const topping = toppings[name];
    if (pizza.getToppings().has(topping)) {
        pizza.removeTopping(topping)
    } else {
        pizza.addTopping(topping);
    }
    updatePrice();
}

function updatePrice() {
    var b = document.getElementById("basket_button");
    const price = pizza.calculatePrice();
    const calories = pizza.calculateCalories();
    b.innerText = `Добавить в корзину за: ${price} ₽ (${calories} кКалл)`;
}
