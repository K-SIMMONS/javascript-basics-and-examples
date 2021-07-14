//This is how you comment in javascript. it's just two forward slashes

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