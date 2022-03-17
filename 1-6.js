let arr = [,,,];

let [year=myYear(), month=myMonth(), day = myDay()] 
	= arr; 


function myYear(){
    return (new Date).getFullYear()
}

function myMonth(){
    return ((new Date).getMonth()+1);
}

function myDay() {
    return (new Date).getDate();}

    
    console.log(day);   // current day
    console.log(month); // current month
    console.log(year);  //current year