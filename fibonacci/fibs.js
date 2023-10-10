function fibs(number){
    let outputArray = [0,1];
    if(number<=0 ) {
        console.log("Enter a valid number");
        return
    }
    if(number === 1) return outputArray[0];
    if (number === 2) return outputArray;
    for(let i=2;i<number;i++){
        let nextValue = outputArray[i-1] + outputArray[i-2];
        outputArray.push(nextValue);
    }
    return outputArray;
}


function fibsRec(n){
    if(n === 1) return [0];
    if(n===2) return [0,1];
    let arr =  fibsRec(n-1);
    arr.push(arr[n-2] + arr[n-3]);
    return arr;
    //return [...arr, arr[n-2] + arr[n-3]];
}



fibs(3);

fibsRec(3);