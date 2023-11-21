//Brute Force 

//TC = O(n) bcoz of push() and shift() method.

class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(element){
        this.item.push(element);
    }
    dequeue(){
        return this.item.shift();
    }
    peak(){
        return this.item.length != 0 ? this.item[0] : null
    }
    isEmpty(){
        return this.item.length == 0;
    }
    isSize(){
        return this.item.length;
    }
    print(){
        this.item.forEach((val)=>console.log(val))
    }
}

// let q = new Queue();
// q.enqueue('Shifana')
// q.enqueue('Silva')
// q.enqueue('Saina')
// q.enqueue('Shahul')
// q.print();
// console.log('----Ater Dequeue-----')
// q.dequeue()
// q.dequeue()
// q.print();
// console.log('---Peak Element---'+q.peak())
// console.log('---isSize---'+q.isSize())
// console.log('---isEmpty---'+q.isEmpty())
// q.dequeue()
// q.dequeue()
// console.log('---Peak Element---'+q.peak())
// console.log('---isSize---'+q.isSize())
// console.log('---isEmpty---'+q.isEmpty())

// Level Order Traversal without using recursion
// BFS without using recursion
// Queue Implementation using a Linked List
// Implement a stack using the queue data structure
// Implement a queue using the stack data structure
