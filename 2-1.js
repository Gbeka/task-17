//object destructuring

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

//with destructuring 
let{color,width,height} = options;

console.log(width); //400

//without destructuring 
// let color  = options.color;
// let width  = options.width;
// let height = options.height;

// console.log(color); //red