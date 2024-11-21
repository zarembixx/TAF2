function palindrom(x){
    const cleanText = x.toLowerCase().replace(/\s+/g, '');
    return cleanText===cleanText.split('').reverse().join('');
}

console.log(palindrom("kajak kajak"));
console.log(palindrom("Maciek"));
console.log(palindrom("abba"));
console.log(palindrom("abab"));