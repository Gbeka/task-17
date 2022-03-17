//object destructuring

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let{color:c, width:w, height:h}=options;
console.log(w); //400

//without destructuring 
// let c = options.color;
// let w = options.width;
// let h = options.height;

// console.log(c); //red