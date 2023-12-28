## _DAY 4 TASK SUMMITION_

### ***Question 1: Do the below programs in anonymous function & IIFE***

#### create a js file name `anonymous.js`.

#### codes

```
// Anonymous function 

// 1a. Print odd numbers in an array\

let oddnumbers=[];
let odd = function(array){
    for (let index in array){
        if (array[index]%2 !== 0){  
            oddnumbers.push(array[index])
        }
    }
    return;
}
odd([1,3,5,33,50,10,90,1063])
console.log(oddnumbers)


// 1b. Convert all the strings to title caps in a string array

let titlecase;
let strings = function(str) {
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        titleCase = str.join(' ');
    }
    return titleCase;
}
strings("i'm a good person");
console.log(titleCase)


// 1C. Sum of all numbers in an array

let sum=0;
let givenarray = function(arr){
    for (let ind in arr){
        sum = sum + arr[ind];
    }
    return sum;
}
givenarray([1,2,3,8,9])
console.log(sum);


// 1d. Return all the prime numbers in an array

let primenumbers = [];
let prime = function(arr) {
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
    return primenumbers;
}

prime([1, 4, 3, 10, 7, 9]);
console.log(primenumbers);

// 1e. Return all the palindromes in an array

let palindromesarray=[];
let rev;
let palindromes = function(arr){
    for(let ind in arr){
        rev = arr[ind].split('').reverse('').join('')
        if(arr[ind] == rev){
            palindromesarray.push(arr[ind]);
        }   
    }return palindromesarray;
}
palindromes(["level", "hello", "deed", "world", "radar"])
console.log(palindromesarray)


// 1f. Return median of two sorted arrays of the same size.

let middleIndex;
let median = function(arr1, arr2) {
    let merge = arr1.concat(arr2);
    let length = merge.length;

    for (let ind = 0; ind < length; ind++) {
        if (ind === Math.floor(length / 2) || (length % 2 === 0 && ind === Math.floor(length / 2) - 1)) {
            middleIndex = ind;
            break;
        }
    }

    if (length % 2 === 0) {
        return (merge[middleIndex - 1] + merge[middleIndex]) / 2;
    } else {
        return merge[middleIndex];
    }
};
console.log(median([1, 2, 3], [4, 5, 6]));


// 1g. Remove duplicates from an array

let arry = function(arr){
    let newarr = Array.from(new Set(arr));
    return newarr;
}
console.log(arry([1, 2, 3, 4, 2, 5, 6, 1]))


//  1h. Rotate an array by k times

let Rotate;
let array = function(arr,k){
    for (let i = 0; i < k; i++) {
        Rotate = arr.unshift(arr.pop());
    }
    return arr;
}
console.log(array([1, 6, 7, 8, 9], 4));


//--------------------------------------------------------


```

#### create a js file name `IIFEfunc.js`.

```//  IIFE function

// 1a. Print odd numbers in an array

let oddnumbers=[];
let odd = (function(array){
    for (let index in array){
        if (array[index]%2 !== 0){  
            oddnumbers.push(array[index])
        }
    }
    return oddnumbers;
})([1,3,5,33,50,10,90,1063])
console.log(oddnumbers)


// 1b. Convert all the strings to title caps in a string array

let titlecase;
let strings = (function(str) {
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        titleCase = str.join(' ');
    }
    return titleCase;
})("i'm a good person");
console.log(titleCase)


// 1C. Sum of all numbers in an array

let sum=0;
let givenarray = (function(arr){
    for (let ind in arr){
        sum = sum + arr[ind];
    }
    return sum;
})([1,2,3,8,9])
console.log(sum);


// 1d. Return all the prime numbers in an array

let primenumbers = [];
let prime = (function(arr) {
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
    return primenumbers;
})([1, 4, 3, 10, 7, 9]);
console.log(primenumbers);


// 1e. Return all the palindromes in an array

let palindromesarray=[];
let rev;
let palindromes = (function(arr){
    for(let ind in arr){
        rev = arr[ind].split('').reverse('').join('')
        if(arr[ind] == rev){
            palindromesarray.push(arr[ind]);
        }   
    }return palindromesarray;
})(["level", "hello", "deed", "world", "radar"])
console.log(palindromesarray)


// 1f. Return median of two sorted arrays of the same size.

let middleIndex;
let median = (function(arr1, arr2) {
    let merge = arr1.concat(arr2);
    let length = merge.length;

    for (let ind = 0; ind < length; ind++) {
        if (ind === Math.floor(length / 2) || (length % 2 === 0 && ind === Math.floor(length / 2) - 1)) {
            middleIndex = ind;
            break;
        }
    }

    if (length % 2 === 0) {
        return (merge[middleIndex - 1] + merge[middleIndex]) / 2;
    } else {
        return merge[middleIndex];
    }
})([1, 2, 3], [4, 5, 6])
console.log(median);


// 1g. Remove duplicates from an array

let array = (function(arr){
    let newarr = Array.from(new Set(arr));
    return newarr;
})([1, 2, 3, 4, 2, 5, 6, 1])
console.log(array)


//1h. Rotate an array by k times

let Rotate;
let arry = (function(arr,k){
    for (let i = 0; i < k; i++) {
        Rotate = arr.unshift(arr.pop());
    }
    return arr;
})([1, 6, 7, 8, 9], 7)
console.log(arry);
```


### ***Question 2: Do the below programs in arrow functions.***

#### create a js file name `arrowfunction.js`.

#### codes

```//Arrow function

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

```

