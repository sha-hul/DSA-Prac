// "use strict";
x = 30;
function show(marks) {
    debugger;
    switch (true) {
        case marks < 25: return 'F';
            break
        case marks >= 25 && marks < 45: return 'E';
            break;
        case marks >= 45 && marks < 50: return 'D';
            break;
        case marks >= 50 && marks < 60: return 'C';
            break;
        case marks >= 60 && marks < 80: return 'B';
            break;
        default: return 'A'
            break;

    }
}
function indices() {
    //1) Brute force

    // var n=nums.length;
    // for(var i=0;i<n-1;i++){
    //     for(var j=1;j<n;j++){
    //         if(nums[i]+nums[j] == target){
    //             return [i,j];
    //         }
    //     }
    // }

    //2)Optimal solution Linear 

    //Initializing HashMap
    debugger;
    target = 9;
    nums = [4, 1, 9, 5];
    let map = new Map();
    let n = nums.length;
    //Linear loop upto last before digit
    for (let i = 0; i <= n - 1; i++) {
        let value = target - nums[i];
        //check
        if (map.has(value)) {
            return [map.get(value), i];
        }
        map.set(nums[i], i);
    }
    return null
}

function Print(data, n) {
    for (let i = 0; i < n; i++) {
        if (n == data) {
            break
        }
    }
    for (let i = 0; i < 10; i++) {
        break
    }
}

let array = [[4, 9, 2], [3, 5, 7], [8, 1, 6]]
function MagicMatrix() {
    for (let indexrow = 0; indexrow < array.length; indexrow++) {
        let col = 0;
        for (let indexcol = 0; indexcol < array.length; indexcol++) {
            col += array[indexcol][indexrow];
        }
        if (col == 15) {
            console.log('true')
        }
    }
}
MagicMatrix();



let lenArr = Array(5);
lenArr[7] = 'Hi';
console.log(lenArr.length)
console.log(lenArr[7])


// Rotate the array
// Reverse the array
// Sort the array
// Print  2nd column in 2d array of 2*3 matrix
// print  2nd row in 2d array of 2*3 matrix
// Print the matrix order of row -- Default
// Print the matrix order of column 
// Diagonal traversal - if we know the cell dowe can fet T.C = O(n) for 2d array 
// Primary Diagonal of 3*3 
// Secondary Diagonal of 3*3

let matrix = [[4, 9, 2], [3, 5, 9], [8, 1, 6]]
let n = 3;
function checkMagicSquare() {
    debugger;
    //To check the given matrix diagonals are equal
    // get the primary and secondary diagonal
    let primary = 0;
    let secondary = 0;
    for (let i = 0; i < n; i++) {
        primary += matrix[i][i]
        //i+j = n-1; j=n-1-j;
        secondary += matrix[i][n - 1 - i];
    }
    //check primary and sec same value
    if (primary != secondary) console.log('No')
    //nexted for loop to iterate the values
    for (let indexrow = 0; indexrow < n; indexrow++) {
        let row = 0;
        for (let indexcol = 0; indexcol < n; indexcol++) {
            row += matrix[indexrow][indexcol];
        }
        //check each row sum is equal to primary
        if (row != primary) console.log('No');
    }
    //nexted for loop to iterate the values
    for (let indexrow = 0; indexrow < n; indexrow++) {
        let col = 0;
        for (let indexcol = 0; indexcol < n; indexcol++) {
            col += matrix[indexcol][indexrow];
        }
        //check each col sum is equal to primary
        if (col != primary) console.log('No')
    }
    console.log('Yes')
}

//Rotate the array

function cyclicRotation() {
    debugger;

    let n = 2;
    let arr = [1, 2];
    let k = 0;
    let j = 0;
    let rotatedArr = [];
    while (j < k) {
        let i = 1;
        while (i < n) {
            //clock wise
            //arr = 5,1,2,3,4
            rotatedArr[i] = arr[i - 1]; // 5,5,1,2,3 
            i++;
        }
        rotatedArr[0] = arr[n - 1]; //4,5,1,2,3
        j++;
        arr = [...rotatedArr];  //arr = 5,1,2,3,4
    }
    if (j == k) {
        rotatedArr = arr;
    }
    console.log(rotatedArr)
}


let strCapFirst = 'the shahul is se in hcl'

let = '1 2 + 2 4 + *'


// 1,2,+,2,3,+,*

//pop out 1
//pop out 2
// operation + so, 1+2 =3

//now  3,+,2,3,+,*

//pop out 2
//pop out 3
// operation + so, 2+5 =7

//now 3,+,7,+,*
function toCapitalize(ch) {
    return ch + ('a' - 'A');
}
let str = 'hello';
str = str.split('');
str[0] = toCapitalize(str[0]);
str = str.join('');

console.log(str)
//#region countVowels
function countVowels() {//13
    debugger
    let word = 'APjjnneGMrCOhvtAlXUJhFGeFfvdvsiQfQXAhtmIqGahKXyWcPDxzqFtjFZbAenSpMScTMVdtSbYBxeCwFmxHvcJD';
    let res = 0;
    let lowerWord = word.toLowerCase();
    if (lowerWord.includes('a') || lowerWord.includes('e') || lowerWord.includes('i') || lowerWord.includes('o') || lowerWord.includes('u')) {
        let stringtoArr = word.split('');
        for (let i = 0; i < stringtoArr.length; i++) {
            if (stringtoArr[i].includes('a') || stringtoArr[i].includes('e') || stringtoArr[i].includes('i') || stringtoArr[i].includes('o') || stringtoArr[i].includes('u')) {
                res++;
            }
        }
    }
    console.log(res);

}
//#endregion

//To change the lowercase to upper case
function islowercase(char) {
    return char >= 'a' && char <= 'z'
  }
  //Doubt
  
  function toUpper(paragraph,charIndex) {
    debugger;
    let asciiCode = (paragraph.charCodeAt(charIndex)) - 32;
    return String.fromCharCode(asciiCode);
  }
  
  //T.C = O(n) , S.C = O(1) 
  // TODO: Implement this method
  function capitalise() {
    paragraph= ''
        let result = "";
      for (let i = 0; i < paragraph.length; i++) {
          if (i == 0) {
              if (islowercase(paragraph[0])) {
                  result = result +toUpper(paragraph,i);
              }
              else{
                 result = result + paragraph[i];
              }
          }
          else if (paragraph[i - 1] == ' ') {
               result = result +toUpper(paragraph,i);
          }
          else {
              result = result + paragraph[i];
          }
      }
    return result;
  }
  //Find the maximum pairs 
  //constrain no numbers are repeative

  function MaxPairs() {
    let arr = ['R','Y','B','P']
    for(let i=0;i<arr.length;i++){
        let arr2 =  [];
        for(let j=0;j<arr.length;j++){
            arr2[]
        }
    }
  }