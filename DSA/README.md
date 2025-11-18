\# 🧠 DSA Assignment – Second Largest Unique Number



\## 📌 Problem

Given an array of integers, return the \*\*second largest unique\*\* number.  

If no such number exists, return `-1`.



---



\## 📘 Example



Input:  

`\[3, 5, 2, 5, 6, 6, 1]`  

Output:  

`5`



Input:  

`\[7, 7, 7]`  

Output:  

`-1`



---



\## 🔍 Approach



We solve this in \*\*O(n)\*\* using a single traversal.



We maintain:

\- `largest` → the largest number

\- `secondLargest` → second largest unique number



For each number:

1\. If it is greater than `largest`, update both.

2\. If it is unique and between the two values, update `secondLargest`.



If `secondLargest` is never updated, return `-1`.



\### ⏱ Time Complexity  

`O(n)`



\### 💾 Space Complexity  

`O(1)`



---



\## 🧪 Sample Code



(See `SecondLargestUnique.java` for full code.)



---



\## 🏁 How to Run



```bash

javac SecondLargestUnique.java

java SecondLargestUnique



