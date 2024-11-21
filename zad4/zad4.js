function sum(tab){
    return tab.reduce((acc, liczba) => acc+liczba,0);
}

console.log(sum([1,2,3]));
console.log(sum([10,20,30,40]));
console.log(sum([]));