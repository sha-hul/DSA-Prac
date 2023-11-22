//Creating Node

class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
 
    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)
 
    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList



//1) Insert the node on Begining of linked list

 AddFirst(data) {
     //Pseudo code
     //if head==null{head=node}
     //Create a newNode;
     let newNode= new Node(data);
     //Node.next = Head
     newNode.next= this.head;
     //Head = newNode
     this.head = newNode;
 }
 //2 Delete a node
DeleteNodeStart(head){
    //if head==null return null
    //if node.next == null return empty
    //Pseudo code
    head= node.next;
}

//3 Traverse a node
//Pseudo Code
// head

//if head==null return 'empty';
//head = node.next;
//head = tempHead
//while(node = null)
//{
//}

//4 Search a element in the linked list

// Pseudocode
// Head
//head = temphead
//if(temphead==null) return -1
//while(node.next==null){
    //if(node.val==target) return true;
    //else tempHead= node.next;
//}
//return false;

//5 Insert a elements at the last 

//Pseudocode

//head= tempHead
//if(head==null) head= node
//while(node.next==null){
    //temo
//}


}