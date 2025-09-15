let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output")

//helper function to make negative numbers red
function outputColor(result) {
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}
function doAdd() {
    let result = Number(one.value) + Number(two.value)
    output.innerHTML = String(result);
    outputColor(result);
}

function doSub() {
    let result =Number(one.value) - Number(two.value);
    output.innerHTML = String(result);
    outputColor(result);
}

function doMultiply() {
    let result = Number(one.value) * Number(two.value);
    output.innerHTML = String(result);
    outputColor(result);
}

function doDivide() {
    let result = Number(one.value) / Number(two.value);
    //Determines color based on if positive or negative
    output.innerHTML = String(result);
    outputColor(result);
}

function doExp() {
    let num = Number(one.value);
    let exp = Number(two.value);
    let result = 1;

    for (let i = 0; i < Math.abs(exp); i++)
    {
        result *= num;
    }

    // Check for negative exponent, if so then reciprocol result
    if (exp < 0)
    {
        result = 1/result;
    }

    output.innerHTML = String(Number(result));
    outputColor(result);
}

function doClear() {
    one.value = "";
    two.value = "";
    output.innerHTML = "";
}

