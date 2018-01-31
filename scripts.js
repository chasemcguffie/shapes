const sideLength = document.getElementById("sideLength");
const rectHeight = document.getElementById("rectHeight");
const rectWidth = document.getElementById("rectWidth");
const radius = document.getElementById("radius");
const shapeDisplay = document.getElementById("shapeDisplay");
const triangleHeight = document.getElementById("triangleHeight");
const sidePanel = document.getElementById("sidePanel");
const shapeName = document.getElementById("shapeName");
const shapeHeight = document.getElementById("shapeHeight");
const shapeWidth = document.getElementById("shapeWidth");
const shapeRadius = document.getElementById("shapeRadius");
const shapeArea = document.getElementById("shapeArea");
const shapePerimeter = document.getElementById("shapePerimeter");
document.addEventListener("DOMContentLoaded", function(event) {

});

class Shape {
    constructor (name) {
        this.name = name;
    }
    describe() {
        shapeName.innerText = `Shape Name: ${this.targetName}`;
        shapeWidth.innerText = `Width: ${this.targetWidth}`;
        shapeHeight.innerText = `Height: ${this.targetHeight}`;
        shapeRadius.innerText = `Radius: ${this.targetRadius}`;
        shapeArea.innerText =  `Area: ${this.targetArea}`;
        shapePerimeter.innerText =  `Perimeter: ${this.targetPerimeter}`;
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
        shapeDisplay.appendChild(squareShape);
        squareShape.style.backgroundColor = 'red';
        squareShape.style.height = this.height;
        squareShape.style.width = this.width;
        squareShape.style.position = 'absolute';
        squareShape.style.top = Math.random() * 30 + 'em';
        squareShape.style.left = Math.random() * 30 + 'em';
        squareShape.addEventListener('click', () => {
            this.squareData();
            this.describe();
        });
        squareShape.addEventListener('dblclick', () => {
            squareShape.remove();
        });
    }
    squareData() {
        this.targetName = Square.name;
        this.targetWidth = sideLength.value;
        this.targetHeight = sideLength.value;
        this.targetRadius = sideLength.value / 2;
        this.targetArea = sideLength.value * sideLength.value;
        this.targetPerimeter = sideLength.value * 4;
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
        shapeDisplay.appendChild(rectShape);
        rectShape.style.backgroundColor = 'green';
        rectShape.style.height = this.height;
        rectShape.style.width = this.width;
        rectShape.style.position = 'absolute';
        rectShape.style.top = Math.random() * 30 + 'em';
        rectShape.style.left = Math.random() * 30 + 'em';
        rectShape.addEventListener('click', () => {
            this.rectangleData();
            this.describe();
        });
        rectShape.addEventListener('dblclick', () => {
            rectShape.remove();
        });
    }
    rectangleData() {
        this.targetName = Rectangle.name;
        this.targetWidth = rectWidth.value;
        this.targetHeight = rectHeight.value;
        this.targetRadius = Math.sqrt((rectHeight.value ** 2) + (rectWidth.value ** 2))/2;
        this.targetArea = rectHeight.value * rectWidth.value;
        this.targetPerimeter = (2 * rectWidth.value) + (2 * rectHeight.value);
    }
}
const makeRectangle = function () {
    new Rectangle(rectHeight.value + 'px', rectWidth.value + 'px');
}
class Circle extends Shape {
    constructor (radius) {
        super('Circle')
        this.height = radius;
        this.width = radius;
        this.render();
    }
    render() {
        let circleShape = document.createElement('div');
        shapeDisplay.appendChild(circleShape);
        circleShape.className = 'circleBase';
        circleShape.style.backgroundColor = 'purple';
        circleShape.style.height = `${this.height}.px`;
        circleShape.style.width = `${this.width}.px`;
        circleShape.style.position = 'absolute';
        circleShape.style.top = Math.random() * 30 + 'em';
        circleShape.style.left = Math.random() * 30 + 'em';
        circleShape.addEventListener('click', () => {
            this.circleData();
            this.describe();
        });
        circleShape.addEventListener('dblclick', () => {
            circleShape.remove();
        });
    }
    circleData() {
        this.targetName = Circle.name;
        this.targetWidth = radius.value * 2;
        this.targetHeight = radius.value * 2;
        this.targetRadius = radius.value;
        this.targetArea = (3.14 * (radius.value * radius.value))
        this.targetPerimeter = 2 * (3.14 * radius.value);
    }
}
const makeCircle = function () {
    new Circle(radius.value);
}
class Triangle extends Shape {
    constructor (height) {
        super('Triangle')
        this.height = height;
        this.width = height;
        this.render();
    }
    render() {
        let triangleShape = document.createElement('div');
        shapeDisplay.appendChild(triangleShape);
        triangleShape.className = 'triangleBase';
        triangleShape.style.backgroundColor = '';
        triangleShape.style.height = 0;
        triangleShape.style.width = 0;
        triangleShape.style.borderBottom = this.height + "px solid yellow";
        triangleShape.style.borderRight = this.width + "px solid transparent";
        triangleShape.style.position = 'absolute';
        triangleShape.style.top = Math.random() * 30 + 'em';
        triangleShape.style.left = Math.random() * 30 + 'em';
        triangleShape.addEventListener('click', () => {
            this.triangleData();
            this.describe();
        });
        triangleShape.addEventListener('dblclick', () => {
            triangleShape.remove();
        });
    }
    triangleData() {
        this.targetName = Triangle.name;
        this.targetWidth = this.height;
        this.targetHeight = this.height;
        this.targetRadius = undefined;
        this.targetArea = .5 * this.height * this.height
        this.targetPerimeter = 2 * this.height * Math.sqrt(2 * this.height * this.height)
    }
}
const makeTriangle = function () {
    new Triangle(triangleHeight.value);
}
