// Working with JS Prototypes
console.log("loading");
String.prototype.grumpus = () => alert("Hello");
() => alert("Hello");
const person = "Robert";

String.prototype.yell = function () {
    console.log(this);
    console.log(this.toUpperCase());
};

// Working with Constructor Functions

function hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

hex(255, 233, 5);
// Factory Functions
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this;

        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

// Constructor Functions
function ConstructColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;

    console.log(this);
}

ConstructColor.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

ConstructColor.prototype.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const colorfy = new ConstructColor(255, 255, 255);
console.log(colorfy);

console.log(colorfy.r, colorfy.g, colorfy.b);

// Javascript Classes
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(val = 1.0) {
        return `rgba(${this.innerRGB()}, ${val})`;
    }

    hex() {
        const { r, g, b } = this;
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    fullSat() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }

    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0;
        else if (cmax == r) h = ((g - b) / delta) % 6;
        else if (cmax == g) h = (b - r) / delta + 2;
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);
        //  Make negative hues positive behind 360 degrees
        if (h < 0) h += 360;
        //  Calculate Brightness
        l = (cmax + cmin) / 2;

        //  Claculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        //  Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
    }
}

// JS Classes Extends and Super Keywords --> Inheritance
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "woof!";
    }

    lives() {
        return `${this.name} has ${this.livesLeft} lives left`;
    }
}

class Dog extends Pet {
    bark() {
        return "bark!!";
    }
}

const nyawi = new Cat("nyawi", 9);
const simba = new Cat("simba", 12, 3);
const woofy = new Dog("woofy", 11);
