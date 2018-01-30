const sideLength = document.getElementById("sideLength");
const rectHeight = document.getElementById("rectHeight");
const rectWidth = document.getElementById("rectWidth");
const radius = document.getElementById("radius");
const shapeDisplay = document.getElementById("shapeArea")
document.addEventListener("DOMContentLoaded", function(event) {

});

class Shape {
    constructor (name) {
        this.name = name;
    }
    render() {
        console.log('hi')
    }
}
class Square extends Shape {
    constructor (sideLength) {
        super('Square');
        this.height = sideLength;
        this.width = sideLength;
        this.render(); 
    }
    render() {
        let squareShape = document.createElement('div');
        shapeArea.appendChild(squareShape);
        squareShape.style.backgroundColor = 'red';
        squareShape.style.height = this.height;
        squareShape.style.width = this.width;
        squareShape.style.position = 'absolute';
        squareShape.style.top = Math.random() * 30 + 'em';
        squareShape.style.left = Math.random() * 30 + 'em';
    }
}
    const makeSquare = function () {
        new Square(sideLength.value + 'px', sideLength.value + 'px');
    }

class Rectangle extends Shape {
    constructor (height, width) {
        super('Rectangle');
        this.height = height;
        this.width = width;
        this.render();
    }
    render() {
        let rectShape = document.createElement('div');
        shapeArea.appendChild(rectShape);
        rectShape.style.backgroundColor = 'blue';
        rectShape.style.height = this.height;
        rectShape.style.width = this.width;
        rectShape.style.position = 'absolute';
        rectShape.style.top = Math.random() * 30 + 'em';
        rectShape.style.left = Math.random() * 30 + 'em';
    }
}
const makeRectangle = function () {
    new Rectangle(rectHeight.value + 'px', rectWidth.value + 'px');
}
class Circle extends Shape {
    constructor (radius) {
        super('Circle')
        this.height = radius * 2;
        this.width = radius * 2;
        this.render();
    }
    render() {
        let circleShape = document.createElement('div');
        shapeArea.appendChild(circleShape);
        circleShape.className = 'circleBase';
        circleShape.style.backgroundColor = 'green';
        circleShape.style.height = this.height;
        circleShape.style.width = this.width;
        circleShape.style.position = 'absolute';
        circleShape.style.top = Math.random() * 30 + 'em';
        circleShape.style.left = Math.random() * 30 + 'em';
    }
}
const makeCircle = function () {
    new Rectangle(radius.value + 'px', radius.value + 'px');
}
