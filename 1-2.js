function func() {
	return ['Ivan', 'Ivanov', 'development department', 'developer', 2000];
}

// destructuring assignment 

let[name, surname, department, position, salary] = func();

console.log(name); //Ivan
console.log(surname); //Ivanov



// without destructuring assignment 

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// console.log(name); //Ivan
//console.log(surname); //Ivanov