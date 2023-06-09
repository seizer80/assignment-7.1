// class Cat {
//     constructor(name, age, color) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }

//     eat(food) {
//         console.log(`eating the food`);
//     }

//     sleep() {
//         console.log(`${this.name} is sleeping.`);
//     }

//     play(toy) {
//         console.log(`${this.name} is playing with ${toy}.`);
//     }
// }

// const cat1 = new Cat("Mango", 2, "white");
// const cat2 = new Cat("kitty", 3, "black");

// console.log(cat1);
// console.log(cat2);


// cat1.eat("milk");
// cat2.sleep();
// cat1.play("yarn");g
// cat2.eat("chicken");

class Pirate {
    constructor(name, age, weapon) {
        this.name = name;
        this.age = age;
        this.weapon = weapon;
    }

    greet() {
        console.log(` I be ${this.name}, a pirate!`);
    }

    attack(target) {
        console.log(`${this.name} attacks ${target} with ${this.weapon}!`);
    }

    drinkRum() {
        console.log(`${this.name} drinks rum `);
    }
}


const jollyRoger = [
    new Pirate("Blackbeard", "Captain", "cutlass"),
    new Pirate("Calico Jack", "First Mate", "flintlock pistol"),
    new Pirate("Anne Bonny", "Quartermaster", "boarding axe")
];

const blackPearl = [
    new Pirate("Captain Barbossa", "Captain", "sword"),
    new Pirate("Elizabeth Swann", "Navigator", "rapier"),
    new Pirate("Ragetti", "Cabin Boy", "wooden leg")
];
for (const pirate of jollyRoger) {
    console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Weapon: ${pirate.weapon}`)
};