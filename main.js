function sumN(...args){//rest
    let numSum = 0;
    for(const arg of args){
    
    numSum+=arg;
    
    }
    return numSum;
    
    }
    
    console.log(sumN(1,2,3,4,5));

    function multiply(a,b,...args)
    {
        let sum  = sumN(...args);
        let multiply = a*b;

        return "Sum: "+ sum + "Mutiplication: " + multiply;
    }
    console.log(multiply(1,2,3,4,5));