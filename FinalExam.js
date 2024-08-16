// FINAL EXAM - 1305

/* Question1: Reverse an Integer (5 MARKS) */
// ANSWER #1 ::

function reverseInteger(x) {
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    const reversed = parseInt(x.toString().split('').reverse().join(''));
    return sign * reversed;
}
// Test Case 1
console.log(reverseInteger(123));  // Output: 321

// Test Case 2
console.log(reverseInteger(-456));  // Output: -654



/* Question 2: Given a sorted array of distinct integers and a target
value, return the index if the target is found. If not, return the index
where it would be if it were inserted in order.( 5 MARKS) */
// ANSWER #2 ::

function searchNum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}

// Test Case 1
console.log(searchNum([1, 3, 5, 6], 5));  // Output: 2

// Test Case 2
console.log(searchNum([1, 3, 5, 6], 2));  //  Output: 1



/* Question3: Delete Node in a Linked List (5 MARKS) */
// ANSWER #3 ::

function deletingNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

// Test Case 1: Delete node with value 5
let node1 = { val: 4, next: null };
let node2 = { val: 5, next: null };
let node3 = { val: 1, next: null };
let node4 = { val: 9, next: null };
node1.next = node2;
node2.next = node3;
node3.next = node4;

deletingNode(node2);

let current = node1;
while (current) {
    console.log(current.val);  // Output: 4, 1, 9
    current = current.next;
}

// Test Case 2: Delete node with value 4
node1 = { val: 4, next: null };
node2 = { val: 5, next: null };
node3 = { val: 1, next: null };
node4 = { val: 9, next: null };
node1.next = node2;
node2.next = node3;
node3.next = node4;

deletingNode(node1); 

current = node1;
while (current) {
    console.log(current.val);  // Output: 5, 1, 9
    current = current.next;
}



/* Question4: Find all the duplicates in an array and return which
is the smallest one. (5 MARKS) */
// ANSWER #4 ::

function findingSmallestDuplicate(arr) {
    let alreadySeen = {};
    let smallDuplicate = null;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (alreadySeen[num]) {
            if (smallDuplicate === null || num < smallDuplicate) {
                smallDuplicate = num;
            }
        } else {
            alreadySeen[num] = true;
        }
    }

    return smallDuplicate;
}

// Test Case 1
console.log(findingSmallestDuplicate([4, 10, 5, 1, 11, 5, 1, 4, 1]));  //Output: 1

// Test Case 2
console.log(findingSmallestDuplicate([1, 10, 1, -1, 10, -1]));  //Output: -1




/* MULTIPLE CHOICE QUESTIONS (Each 2 Marks):

Which type of search is efficient on a sorted array?
● A) Linear Search
● B) Binary Search
● C) Hash Search
● D) Exponential Search 
// Your answer: (B) Binary Search

What is the time complexity of inserting a new node at the
beginning of a singly linked list?
● A) O(1)
● B) O(n)
● C) O(log n)
● D) O(n log n)
// Your answer: (A)  O(1)


In a binary search tree (BST), the left child of a node is always:
● A) Greater than the node
● B) Smaller than the node
● C) Equal to the node
● D) Random compared to the node
// Your answer: (B) Smaller than the node 

Which traversal of a BST visits nodes in ascending order?
● A) Pre-order
● B) Post-order
● C) In-order
● D) Level-order
// Your answer: (C) In-order

In a doubly linked list, what does the prev pointer in the first
node point to?
● A) The last node
● B) Null
● C) The second node
● D) The middle node
// Your answer: (B) Null

*/