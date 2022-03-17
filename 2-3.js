let options = {
	width:  400,
	height: 500,
};

let{color = "black", width,height}=options;

console.log(color); //black



//without destructuring 
// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;