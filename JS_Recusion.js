//1 calling all 5 friends for Lunch
function GoToLunch(n) {
    //Base Case
    if (n==5) {
        return 'Ready to go for Lunch';
    }
    console.log(n)
    return GoToLunch(n+1)
}

console.log(GoToLunch(1))
//1
//2
//3
//4
//5 - go to lunch
//4 - go to lunch
//3 - go to lunch
//2 - go to lunch
//1 - go to lunch


//2 Natural Sum

//Function Signature
function NaturalSum(n) {
    console.log(n)
    //Base Case
    if (n==1) {
        return 1;
    }
    //Recursive condition
    return NaturalSum(n-1)+n;
}
console.log(NaturalSum(5))
//Q = 5
//Sol - 5+4+3+2+1

//5 -
//4
//3
//2
//1
//1= 1
//2= 3
//3= 6
//4= 10
//5= 15





//3 Multiply the elements in the array

//function Signature

function MultiplyArray(arr) {
    //base case
    console.log(arr)
    if (arr.length == 1) {
        return arr[0];
    }

    //recursive condition
    return arr[arr.length-1]* MultiplyArray(arr.slice(0,arr.length-1))
} 


console.log(MultiplyArray([4,2,9,14,3]))
//[1,2,3,4]

// 4*6 = 24 
// 3*2 
// 2*1
// 1*1

//4.Interview Question Factorial of n

//function Signature
function Factorial(n) {
    console.log(n)
    //Base condition
    if (n==1) {
        return 1;
    }
    //recursive condition
    return n*Factorial(n-1)
}

console.log(Factorial(5))
//n=5

// 5*Fac(5-1)
// 4*Fac(4-1)
// 3*Fac(3-1)
// 2*Fac(2-1)
// 1 returns 1 base case
//5*4*3*2*1 = 120


//5.Create an array with its range
//inp start=0, end=5

let rangeArr=[]
function rangeOfNumbers(startNum,endNum) {
    debugger;
     console.log(startNum)
    //base case
    if (startNum>endNum) {
        return rangeArr;
    }
    rangeArr.push(startNum) //0
    console.log(rangeArr)
    //recursive function
    return rangeOfNumbers(startNum+1,endNum) 
}

console.log(rangeOfNumbers(0,5))

//0,5
//arr.push()
//fun(start+1)
//start>end
//0 [0]
//1 [0,1]
//2 [0,1,2]
//3 [0,1,2,3]
//4 [0,1,2,3,4]
//5 [0,1,2,3,4,5]

//6.Palindrome of the number

//I/P = 121 -- true
//I/P = 1222 -- false

//function Signature
function PalindromeOfNum(number) {
    
    //base case

    //recursive condition

}

//1221

//convert into string and split

//1 -> lastNumber function(arr[len-1],)


console.log('---Tribonnaci---')
//7.Tribonnaci Series

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.


function Tribonnaci(n) {
    console.log(n)
    if(n==0)
        return 0;
    else if (n==1)
        return 1;
    else if(n==2)
        return 1;

    return Tribonnaci(n-3)+Tribonnaci(n-2)+Tribonnaci(n-1)

}


console.log(Tribonnaci(4))