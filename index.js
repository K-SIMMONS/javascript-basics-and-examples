//This is how you comment in javascript. it's just two forward slashes
//Javascript is a dynamic language meaning you can changed variables at run time

//Here we have the console log. The console log will display your values in the console portion of the inspect element tool on your browser
//You can use this to keep track of data and place markers as you go
//Writing within single(') or double("") will read whatever insert as Text

console.log('Hello Kurt!');


//Here we have our first example of a variable
//Variables are used to temporarily store data and values

let name = 'Kurt';
console.log(name);

//Here is a basic example of a constant or const.
//Constants can not be changed once defined or an error will occur. Think of this as an ID in a way, these should be unique and only listed once
//Since we set a const for the interestRate value of 0.3, when we try to change it on the next line below we will receive and error 

const interestRate = 0.3;
//interestRate = 1;   <----- Commented out to get rid of error, but make sure you understand why this will display an error
console.log(interestRate);


//Here we will go over some basic types of variables. There are 2 different types, Primitive and Reference types
//First, we'll go over Primitive types which include: Strings, Numbers, Boolean, Undefined, and Null

let myName = 'Kurt'; //This is a String Literal

let age = 22; //This is a Number Literal

let isApproved = false; //This is a Boolean Literal

let firstName = undefined; //This is Undefined

let lastName = null; //This is Null, it is used to CLEAR the value of a variable 

//Now, we are going to go over Reference types. These include: Objects, Arrays, and Functions
//First, We'll start with Object

let person = {    //Think of objects as a div or a container. We can put multiple variables inside of an object, then simply call the object to display those said variables!
    name: 'John',
    age: 50
};

console.log(person);

//Array:

let firstArray = ['red' , 'blue'];      // Arrays are used to store variables in a list style format.
                                            // Array literals are called by using the square brackets.
                                            // The order you list the items in an array matter. Each item in the array has a numeric value with the first item starting at 0 and so on so fourth
console.log(firstArray);

//An array but using the index to call an item:

let secondArray = ['red' , 'blue' , 'green' , 'black' , 'white' , 50];

console.log(secondArray[4]);            // When we view the console log we will see that the "4" index value contains the item 'white'.






































//EXAMPLES////////////////////////////////////////////////////////////////


//Here is a function that ask user to enter a number, then display whether or not that number is odd or even!
function oddEvenBtn()
{
    let num1 = prompt("Enter a number");
    alert(`This number is ${oddOrEven(num1)}`);
}


function oddOrEven(number)
{
    if (number % 2 === 0)
    {
        return "even";
    }
    else
    {
        return "odd";
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////