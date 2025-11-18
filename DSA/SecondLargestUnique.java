// Java Program: Second Largest Unique Number in an Array
// Time Complexity: O(n), Single Traversal
// Author: Puvvala Lavanya

public class SecondLargestUnique {

    // Function to return the second largest UNIQUE number
    static int getSecondLargest(int[] arr) {

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {

            // If num is new largest
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            }

            // If num is unique, less than largest, but greater than secondLargest
            else if (num < largest && num > secondLargest) {
                secondLargest = num;
            }
        }

        // If secondLargest was never updated → return -1
        return (secondLargest == Integer.MIN_VALUE) ? -1 : secondLargest;
    }

    public static void main(String[] args) {

        int[] arr1 = {3, 5, 2, 5, 6, 6, 1};
        int[] arr2 = {7, 7, 7};
        int[] arr3 = {12, 35, 1, 10, 34, 1};

        System.out.println("Input: [3,5,2,5,6,6,1] → " + getSecondLargest(arr1)); // 5
        System.out.println("Input: [7,7,7] → " + getSecondLargest(arr2)); // -1
        System.out.println("Input: [12,35,1,10,34,1] → " + getSecondLargest(arr3)); // 34
    }
}
