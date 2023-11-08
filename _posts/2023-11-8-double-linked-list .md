---
layout: post
title: "Double Linked List in Java"
desc: <div class="tag">Data Structure</div><div class="tag">Java</div></br>An implementation of a double linked list data structure in Java, covering various operations and use cases.
img: ../public/post-assets/DataStructure/LinkedList/title.gif
comments: true
---

# Introduction

In computer science, a double linked list is a versatile data structure that allows efficient insertion, deletion, and traversal of elements. Unlike a single linked list, a double linked list consists of nodes where each node has two pointers: one that points to the next node, and another that points to the previous node. In this blog post, we'll explore the implementation of a double linked list in Java.

## What is a Double Linked List?

A double linked list is a data structure composed of nodes. Each node contains two references or pointers: one that points to the previous node and another that points to the next node. This bidirectional connectivity allows for easy traversal in both forward and backward directions. Here are some key characteristics of a double linked list:

- Bidirectional: Each node in the list points to both the next and previous nodes.
- Dynamic: The list can grow or shrink as elements are added or removed.
- Efficient Insertions and Deletions: Adding or removing elements at the beginning, middle, or end of the list can be done efficiently.

## Implementing a Double Linked List in Java

Let's dive into the implementation of a double linked list in Java. We'll cover various operations and methods for working with this data structure. For our implementation, we'll create a class called `DoubleLinkedList` with the following key methods:

1. `size()`: Returns the number of elements in the list.
2. `isEmpty()`: Checks if the list is empty.
3. `valueAt(index)`: Returns the value of the element at a given index.
4. `pushFront(value)`: Adds an item to the front of the list.
5. `popFront()`: Removes the front item and returns its value.
6. `pushBack(value)`: Adds an item to the end of the list.
7. `popBack()`: Removes the end item and returns its value.
8. `front()`: Returns the value of the front item.
9. `back()`: Returns the value of the end item.
10. `insert(index, value)`: Inserts a value at the specified index.
11. `erase(index)`: Removes a node at the given index.
12. `search(value)`: Searches the list and returns an array of indexes where the value is found.
13. `clear()`: Empties the list.
14. `toString()`: Return all data of list.

## Implementation

Let's start with the Node class

```java
//ListNode class, each node has data and the reference to the next node and previous node
class Node<T> {
    T data;
    Node<T> next;
    Node<T> prev;

    public Node(T data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
```
and the Double Link List class
```java
class DoubleLinkedList<T>{
    private Node<T> head;
    private Node<T> tail;
    private int size;

    public DoubleLinkedList(){
        head = null;
        tail = null;
        size = 0;
    }
```

```java
    public int size(){
            return this.size;
        }
```
```java
    public boolean isEmpty(){
            return size == 0;
        }
```
```java
    //return the value of the nth element, index start at 0
    public T valueAt(int index){
        if(index < 0 || index >= size){
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        Node<T> current = head;
        for(int i = 0; i < index; i++){
            current = current.next;
        }
        return current.data;
    }

```
```java
    //"push an item to the front of the list"
    public void pushFront(T value){
        Node<T> newNode = new Node<>(value);
        newNode.next = head;
        newNode.prev = null;
        if (head != null) {
            head.prev = newNode;
        }
        head = newNode;
        if(isEmpty()){
            tail = head;
        }
        size++;
    }
```
```java
    //"add item to end of list"
    public void pushBack(T value){
        Node<T> newNode = new Node<>(value);
        newNode.next = null;
        newNode.prev = tail;
        if (tail != null) {
            tail.next = newNode;
        }
        tail = newNode;
        if (isEmpty()) {
            head = newNode;
        }
        size++;
    }
```
```java
    //"remove end item and return its value"
    public T popBack(){
        if (tail == null) {
            throw new IllegalStateException("List is empty");
        }
        T value = tail.data;
        tail = tail.prev;
        if (tail != null) {
            tail.next = null;
        } else {
            head = null;
        }
        size--;
        return value;
    }
```
```java
    //"remove front item and return its value"
    public T popFront(){
        if(head == null){
            throw new IllegalStateException("List is empty");
        }
        T value = head.data;
        head = head.next;
        if (head != null) {
            head.prev = null;
        } else {
            tail = null;
        }
        size--;
        return value;
    }
```
```java
    //get value of front item
    public T front(){
        if(head == null){
            throw new IllegalStateException("List is empty");
        }
        return head.data;
    }
```
```java
    //get value of end item
    public T back(){
        if(tail == null){
            throw new IllegalStateException("List is empty");
        }
        return tail.data;
    }
```
```java
    //insert value at index, put value at position index so current item at that index is pointed to the new item at index, index starts at 0
    public void insert(int index, T value) {
    if (index < 0 || index > size) {
        throw new IndexOutOfBoundsException("Index out of bounds");
    }

    if (index == 0) {
        push_front(value);
    } else if (index == size) {
        push_back(value);
    } else {
        Node<T> newNode = new Node<>(value);
        Node<T> current = head;

        for (int i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;

        size++;
    }
}
```
```java
    //remove a node from the list by its position, change the referece of the node that point to them to the reference of next node from the deleted node
    public void erase(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }

        if (index == 0) {
            if (head == tail) {
                head = tail = null;
            } else {
                head = head.next;
                head.prev = null;
            }
        } else if (index == size - 1) {
            tail = tail.prev;
            tail.next = null;
        } else {
            Node<T> current = head;
            for (int i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        size--;
    }
```
```java
    //search list and return the index that contains the position of the value that matches, index start at 0
    public String search(T value){
        String indexes = "";
        Node<T> current = head;
        for (int i =0; i < size; i++) {
            if (current.data.equals(value)) {
                indexes = indexes +" "+ i;
            }
            current = current.next;
        }
        return indexes;
    }
```
```java
    //empty the list
    public void clear() {
        head = null;
        tail = null;
        size = 0;
    }
```
```java
    //outputs all value of list
    public String toString() {
        String result = "Double Linked List: [";
        Node<T> current = head;

        while (current != null) {
            result += current.data;
            if (current.next != null) {
                result += " <-> ";
            }
            current = current.next;
        }

        result += "]";
        return result;
    }
}
```
## Testing

```java
public class Main {
    public static void main(String[] args) {
            // test commands
    }

    //method for testing
    //print head,tail and the actual list
    public static void printListInfor(DoubleLinkedList list){
        if (!list.isEmpty()) {
            System.out.println("Front: " + list.front() + " Back: " + list.back());
        } else {
            System.out.println("The list is empty.");
        }
        System.out.println("Actual list: " + list.toString());
        System.out.println();
    }
}
```
### Test size(), pushFront(), isEmpty()

```java
public class Main {
    public static void main(String[] args) {
        DoubleLinkedList<Integer> list = new DoubleLinkedList<>();

        System.out.println("Is the list empty? " + list.isEmpty());
        System.out.println("List size: " + list.size() +"\n");

        list.pushFront(3);
        printListInfor(list);

        list.pushFront(2);
        printListInfor(list);

        list.pushFront(1);
        printListInfor(list);
    }
```

    Is the list empty? true
    List size: 0
               
    Front: 3 Back: 3
    Actual list: Double Linked List: [3]
            
    Front: 2 Back: 3
    Actual list: Double Linked List: [2 <-> 3]
             
    Front: 1 Back: 3
    Actual list: Double Linked List: [1 <-> 2 <-> 3]


### Test valueAt(int index)

```java
printListInfor(list);

System.out.println("Value at index 2: " + list.valueAt(2));
System.out.println("Value at index 1: " + list.valueAt(1));
System.out.println("Value at index 0: " + list.valueAt(0));
System.out.println("Value at index -1: " + list.valueAt(-1));



```

    Front: 1 Back: 3
    Actual list: Double Linked List: [1 <-> 2 <-> 3]
    
    Value at index 2: 3
    Value at index 1: 2
    Value at index 0: 1
    Exception in thread "main" java.lang.IndexOutOfBoundsException: Index out of bounds
            at SingleLinkedList.valueAt(Main.java:103)
            at Main.main(Main.java:235)
    

### Test popFront()

```java
list.pushFront(4);
printListInfor(list);

System.out.println("Value return by pop front: " + list.popFront());
printListInfor(list);

System.out.println("Value return by pop front: " + list.popFront());
printListInfor(list);


System.out.println("Value return by pop front: " + list.popFront());
printListInfor(list);


System.out.println("Value return by pop front: " + list.popFront());
printListInfor(list);
```
    Front: 4 Back: 3
    Actual list: Double Linked List: [4 <-> 1 <-> 2 <-> 3]
    
    Value return by pop front: 4
    Front: 1 Back: 3
    Actual list: Double Linked List: [1 <-> 2 <-> 3]
    
    Value return by pop front: 1
    Front: 2 Back: 3
    Actual list: Double Linked List: [2 <-> 3]
    
    Value return by pop front: 2
    Front: 3 Back: 3
    Actual list: Double Linked List: [3]
    
    Value return by pop front: 3
    The list is empty.
    Actual list: Double Linked List: []


### Test pushBack()

```java
printListInfor(list);

list.pushBack(1);
printListInfor(list);

list.pushBack(2);
printListInfor(list);
```
    The list is empty.
    Actual list: Double Linked List: []
    
    Front: 1 Back: 1
    Actual list: Double Linked List: [1]
    
    Front: 1 Back: 2
    Actual list: Double Linked List: [1 <-> 2]


### Test popBack()

```java
list.push_back(3);
printListInfor(list);

System.out.println("Value return by pop back: " + list.popBack());
printListInfor(list);

System.out.println("Value return by pop back: " + list.popBack());
printListInfor(list);

System.out.println("Value return by pop back: " + list.popBack());
printListInfor(list);

System.out.println("Value return by pop back: " + list.popBack());
printListInfor(list);
```
    Front: 1 Back: 3
    Actual list: Double Linked List: [1 <-> 2 <-> 3]
    
    Value return by pop back: 3
    Front: 1 Back: 2
    Actual list: Double Linked List: [1 <-> 2]
    
    Value return by pop back: 2
    Front: 1 Back: 1
    Actual list: Double Linked List: [1]
    
    Value return by pop back: 1
    The list is empty.
    Actual list: Double Linked List: []
    
    Exception in thread "main" java.lang.IllegalStateException: List is empty
            at DoubleLinkedList.popBack(Main.java:86)
            at Main.main(Main.java:243)

### Test front() back()

```java
printListInfor(list);

list.pushBack(3);
printListInfor(list);

list.push_back(2);
printListInfor(list);

list.push_back(1);
printListInfor(list);
```
    The list is empty.
    Actual list: Double Linked List: []
    
    Front: 3 Back: 3
    Actual list: Double Linked List: [3]
    
    Front: 3 Back: 2
    Actual list: Double Linked List: [3 <-> 2]
    
    Front: 3 Back: 1
    Actual list: Double Linked List: [3 <-> 2 <-> 1]
    

## Test insert(int index, T value)

```java
list.clear();
printListInfor(list);

list.insert(0,1);
printListInfor(list);

list.insert(1,2);
printListInfor(list);

list.insert(0,2);
printListInfor(list);

list.insert(0,3);
printListInfor(list);

list.insert(2,4);
printListInfor(list);

list.insert(-1,1);
printListInfor(list);
```   
    Actual list: Double Linked List: []
    
    Front: 1 Back: 1
    Actual list: Double Linked List: [1]
    
    Front: 1 Back: 2
    Actual list: Double Linked List: [1 <-> 2]
    
    Front: 2 Back: 2
    Actual list: Double Linked List: [2 <-> 1 <-> 2]
    
    Front: 3 Back: 2
    Actual list: Double Linked List: [3 <-> 2 <-> 1 <-> 2]
    
    Front: 3 Back: 2
    Actual list: Double Linked List: [3 <-> 2 <-> 4 <-> 1 <-> 2]
    
    Exception in thread "main" java.lang.IndexOutOfBoundsException: Index out of bounds
            at DoubleLinkedList.insert(Main.java:136)
            at Main.main(Main.java:241)


### Test erase(index)

```java
printListInfor(list);

list.erase(1);
printListInfor(list);

list.erase(0);
printListInfor(list);


list.erase(2);
printListInfor(list);

list.erase(0);
printListInfor(list);

list.erase(3);
printListInfor(list);
```
    Front: 3 Back: 2
    Actual list: Double Linked List: [3 <-> 2 <-> 4 <-> 1 <-> 2]
    
    Front: 3 Back: 2
    Actual list: Double Linked List: [3 <-> 4 <-> 1 <-> 2]
    
    Front: 4 Back: 2
    Actual list: Double Linked List: [4 <-> 1 <-> 2]
    
    Front: 4 Back: 1
    Actual list: Double Linked List: [4 <-> 1]
    
    Front: 1 Back: 1
    Actual list: Double Linked List: [1]
    
    Exception in thread "main" java.lang.IndexOutOfBoundsException: Index out of bounds
            at DoubleLinkedList.erase(Main.java:159)

### Test search(T value)

```java
list.clear();

list.insert(0,1);

list.insert(1,2);

list.insert(0,2);

list.insert(0,3);

list.insert(2,4);

printListInfor(list);
System.out.println(list.search(3));
System.out.println(list.search(2));
System.out.println(list.search(1));
System.out.println(list.search(0));
```
    Front: 3 Back: 2
    Actual list: Double Linked List: [3 <-> 2 <-> 4 <-> 1 <-> 2]
    
     0
     1 4
     3 
