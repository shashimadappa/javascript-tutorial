// JavaScript Classes Example
// 1. Defining a class
class Animal {
    // 2. The constructor method is called when you create a new instance
    constructor(name, sound) {
        this.name = name;   // 'this' refers to the current instance
        this.sound = sound;
    }

    // 3. Method defined inside the class
    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// 4. Creating instances (objects) of the class
const dog = new Animal('Dog', 'Woof');
const cat = new Animal('Cat', 'Meow');

// 5. Calling methods on the instances
dog.speak(); // Output: Dog says Woof
cat.speak(); // Output: Cat says Meow

// 6. Inheritance: Creating a subclass
class Bird extends Animal {
    constructor(name, sound, canFly) {
        // 7. Call the parent class constructor with 'super'
        super(name, sound);
        this.canFly = canFly;
    }

    // 8. Overriding a method
    speak() {
        super.speak(); // Call the parent method
        if (this.canFly) {
            console.log(`${this.name} can fly!`);
        } else {
            console.log(`${this.name} cannot fly.`);
        }
    }
}

const parrot = new Bird('Parrot', 'Squawk', true);
parrot.speak();
// Output:
// Parrot says Squawk
// Parrot can fly!

const penguin = new Bird('Penguin', 'Honk', false);
penguin.speak();
// Output:
// Penguin says Honk
// Penguin cannot fly.
/*

Defining classes in JavaScript:
- Use the `class` keyword.
- Add a `constructor` method for initialization.
- Define methods directly inside the class body.
- Use `extends` for inheritance and `super()` to call the parent constructor.
*/
/*
Definition:
A class in JavaScript is a blueprint for creating objects with shared properties and methods. It encapsulates data (properties) and behavior (methods) and supports inheritance, allowing you to create subclasses that extend functionality from parent classes.
*/