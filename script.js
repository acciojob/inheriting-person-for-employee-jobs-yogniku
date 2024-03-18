// complete this js code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height	
        
	}
    get width(){
	return  this._width;
	}
	set width(width){
		this._width=width;
	}
    get height(){
       return this._height;
       }
	   set height(height){
		this._height=height;	
	   }
       
	getArea(){
		    return this._width * this._height;;
	}
}


class Square extends Rectangle {
	constructor(side){
    super(side, side);
    this._side = side;
	}
	getPerimeter(){
		 return 4 * this._side;
	}
	
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

