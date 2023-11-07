class MaxHeap {
    constructor() {
        this.heap = [];
    }

    leftChild (index){
        return index * 2 + 1;
    }
    rightChild (index){
        return index * 2 + 2;
    }
    parent (index){
        return Math.floor((index-1) / 2);
    }

    size() {
        return this.heap.length;
    }

    swap(indexOne, indexTwo) {
        const tmp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = tmp;
    }

    peek() {
        return this.heap[0];
    }

    insert(element) {
        this.heap.push(element);
        let index = this.heap.length-1;
        while (index !== 0 && this.heap[index] > this.heap[this.parent(index)]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    extractMax() {
        const root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapify(0);
        return root;
    }

    heapify(index) {
        let left = this.leftChild(index);
        let right = this.rightChild(index);
        let smallest = index;
      
        if (left < this.heap.length && this.heap[smallest] < this.heap[left]) {
            smallest = left;
        }
        
        if (right < this.heap.length && this.heap[smallest] < this.heap[right]) {
            smallest = right;
        }
        
        if (smallest != index) {
            this.swap(smallest, index);
            this.heapify(smallest);
        }
    }
}



// /**
//  * @param {number[]} arr
//  * @return {number}
//  */




function searchTarget() {
    debugger
    let arrlength=16;
    let array = [ 518 ,521 ,540 ,541 ,543 ,545 ,553 ,556 ,577 ,595 ,604 ,607 ,612 ,618 ,625 ,631]
    let target = 577
    // starts from always zero
    let start = 0;
    let end= arrlength-1;
    let res= -1;
    while(start<=end){
        let midElement =Math.round(arrlength/2); //
        if(array[midElement] == target){
            res= midElement;
            break;
        }
        else if(array[midElement] > target){
            midElement= midElement-1
            start++
        }
        else if(array[midElement] < target){
            midElement= midElement+1
            end--
        }
    }
    return res;
}