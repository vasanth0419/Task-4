//Arrow function

//2a. Print odd numbers in an array

let oddnumbers=[];
let odd = (array)=> {
    for (let index in array){
        if (array[index]%2 !== 0){  
            oddnumbers.push(array[index])
        }
    }
}
odd([1,3,5,33,50,10,90,1063])
console.log(oddnumbers)


// 2b. Convert all the strings to title caps in a string array

let titlecase;
let strings = (str) => {
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        titleCase = str.join(' ');
    }
}
strings("i'm a good person");
console.log(titleCase)

//2C. Sum of all numbers in an array

let sum=0;
let array = (arr) => {
    for (let ind in arr){
        sum = sum + arr[ind];
    }
}
array([1,2,3,8,9])
console.log(sum);


//2d. Return all the prime numbers in an array

let primenumbers = [];
let prime = (arr) => {
    for (let ind in arr) {
        if (arr[ind] > 1) {
            let isPrime = true;
            for (let i = 2; i < arr[ind]; i++) {
                if (arr[ind] % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primenumbers.push(arr[ind]);
            }
        }
    }
}
prime([1, 4, 3, 10, 7, 9]);
console.log(primenumbers);


//2e. Return all the palindromes in an array

let palindromesarray=[];
let rev;
let palindromes = (arr) => {
    for(let ind in arr){
        rev = arr[ind].split('').reverse('').join('')
        if(arr[ind] == rev){
            palindromesarray.push(arr[ind]);
        }   
    }
}
palindromes(["level", "hello", "deed", "world", "radar"])
console.log(palindromesarray)
