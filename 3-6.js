// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
	
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

func( {color:"red", width: 400, height: 500} );

function func({color="white",width,height}){
    console.log(color); //red
}