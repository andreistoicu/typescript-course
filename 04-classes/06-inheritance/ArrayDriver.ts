import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(30, 40, 50);
let myRectangle = new Rectangle(5, 10, 20, 30);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let shape of theShapes) {
    console.log(shape.getInfo());
}
