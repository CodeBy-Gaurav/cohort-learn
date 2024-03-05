function display(fnToCall, num1,num2){
    const result = fnToCall(num1,num2);
    console.log("the result of your query is :"+ result)
    
}

function sum(num1,num2){
    return num1 + num2;
}

function product(num1,num2){
    return num1*num2;
}

// calling the function

display(sum,3,6);
display(product,3,6);
