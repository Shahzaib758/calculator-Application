function getInput(values){
    let input = document.getElementById("display");
    input.value +=values;
}

function clearScreen(){
    let input = document.getElementById("display");
    input.value = "";
}

function evaluation(){
    let result = document.getElementById("display");
    result.value = eval(result.value);
    console.log();
}

function del(){
    let input = document.getElementById("display").value;
    input = input.slice(0,(input.length-1));
    document.getElementById("display").value = input;
}