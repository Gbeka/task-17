let arr = ['Ivan', 'Ivanov', 'development department', 'developer', 2000];


// destructuring assignment 
let[name, surname, ...rest] = arr;

console.log(rest);


// without destructuring assignment 
// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2);

// console.log(info);