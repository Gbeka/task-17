let arr = ['Ivan', 'Ivanov', 'development department', 'developer', 2000];


// destructuring assignment 
let[,, department, position] = arr;
console.log(department);  //development department


// without destructuring assignment 
// let department = arr[2];
// let position   = arr[3];