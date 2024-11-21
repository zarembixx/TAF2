function isHappyNumber(num){
    let seen = new Set();

    while (num !==1 && !seen.has(num)){
        seen.add(num);
        num = num.toString().split('').map(digit => Math.pow(parseInt(digit),2)).reduce((acc,curr)=>acc+curr,0);
    }
    return num === 1;
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(2));
console.log(isHappyNumber(7));