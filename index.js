//This is how you comment in javascript. it's just two forward slashes

//Here we have the console log. The console log will display your values in the console portion of the inspect element tool on your browser
//You can use this to keep track of data and place markers as you go
//Writing within single(') or double("") will read whatever insert as Text
console.log('Hello Kurt!');






















































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