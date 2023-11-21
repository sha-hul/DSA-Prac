class Stack {
    constructor() {
        this.item = [];
    }
    //push
    push(element) {
        this.item.push(element);
    }
    //pop
    pop() {
        return this.item.length != 0 ? this.item.pop() : 'No Items in Stack';
    }
    //getSize
    size() {
        return this.item.length
    }
    //isEmpty
    isEmpty() {
        return this.item.length == 0;
    }
    //peek
    peek() {
        return this.item.length != 0 ? this.item[0] : null;
    }
}

// Postfix, Infix and Prefix conversions

function postfixExpression() {
    debugger;
    exp = '9 9 * 1 5 - - 8 2 + 4 3 + * - 6 6 + 6 6 - + 9 8 * 9 1 * + * * 8 3 6 - 2 7 - + + 2 - +'; // op 200
    //Declare the Stack
    let stack = new Stack();
    //change to arr
    let arr = exp.split(' ');
    //check the negative numbers

    //traverse the array
    for (let i = 0; i < arr.length; i++) {
        //check if the index in operator
        if (arr[i] == '+' || arr[i] == '-' || arr[i] == '*') {
            //pop out element last
            let b = stack.pop();
            //pop out element lastprevious
            let a = stack.pop();
            let _a = Number(a);
            let _b = Number(b);
            if (arr[i] == '+') {
                stack.push(_a + _b)
            }
            else if (arr[i] == '-') {
                stack.push(_a - _b)
            }
            else {
                stack.push(_a * _b)
            }
        }
        else {
            //push the element in stack
            stack.push(arr[i]);
        }
    }
    let res = stack.pop()
    console.log(res)
}

// Balanced Parentheses problem

function validParenthesis() {
    debugger
    s = '([)]';
    //Declare the stack
    let stack = new Stack();
    //string to array
    let arr = s.split(''); //[({})]
    if (arr.length == 0) return true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '}' || arr[i] == ']' || arr[i] == ')') {
            if (arr[i] == '}') {
                let res = stack.pop();
                if (!(res == '{')) {
                    console.log(false)
                    break
                }
            }
            if (arr[i] == ']') {
                let res = stack.pop();
                if (!(res == '[')) {
                    console.log(false)
                    break
                }
            }
            if (arr[i] == ')') {
                let res = stack.pop();
                if (!(res == '(')) {
                    console.log(false)
                    break
                }
            }
        }
        else {
            stack.push(arr[i]);
        }
    }
    console.log(true)
}

// Tree traversals without using recursion

// Expression evaluation

// Next Greater/Smaller Element

