let arr = ['Ivan', 'Ivanov', 'development department', 'developer'];

// destructuring assignment 

let[name, surname, department, position = 'junior'] = arr;

console.log(position);  //developer



// without destructuring assignment 

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'junior';
// }

// console.log(position);  //developer
