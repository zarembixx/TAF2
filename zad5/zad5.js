function fibonacci(x){
    if(x===0) return 0;
    if(x===1) return 1;
    let a=0, b=1,c;
    for(let i=2;i<=x;i++){
        c=a+b;
        a=b;
        b=c;
    }
    return b;
}



console.log(fibonacci(60));