const mergesort = (arr) => {
    if(arr.length === 0) return "Enter a valid array";
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftarray = mergesort(arr.slice(0,mid));
    const rightarray = mergesort(arr.slice(mid, arr.length));
    return merge(leftarray,rightarray);
}

const merge = (leftarr,rightarr) => {

    let temp = [];
    let leftindex = 0;
    let rightindex = 0;

    while(leftindex < leftarr.length &&  rightindex < rightarr.length){
        if(leftarr[leftindex] < rightarr[rightindex]){
            temp.push(leftarr[leftindex]);
            leftindex++;

        }
        if(rightarr[rightindex] < leftarr[leftindex]){
            temp.push(rightarr[rightindex]);
            rightindex++;
        }

    }

    while(leftindex < leftarr.length){
        temp.push(leftarr[leftindex]);
        leftindex++;
    }

    while(rightindex < rightarr.length){
        temp.push(rightarr[rightindex]);
        rightindex++;
    }

    return temp;

}



console.log(mergesort([9,7,6,5,11,2,4]));
console.log(mergesort([10])); 
console.log(mergesort([]));