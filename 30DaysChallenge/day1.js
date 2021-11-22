console.log("DAY1 - DSA PRACTICE");
// ----------------------------------- problem 1 -------------------------------------------------------------
// sort 0 1 2
// problem link - https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

// solution 1- using hash table - 0(2n) - time / space - 0(n)
const sort012sSolution1 = (arr) => {
  const counts = {};

  arr.forEach((item) => {
    if (item === 0) {
      if (counts[0]) counts[0] += 1;
      else counts[0] = 1;
    }
    if (item === 1) {
      if (counts[1]) counts[1] += 1;
      else counts[1] = 1;
    }
    if (item === 2) {
      if (counts[2]) counts[2] += 1;
      else counts[2] = 1;
    }
  });

  sortedArray = [];
  for (const instance in counts) {
    for (let i = 0; i < counts[instance]; i++) {
      sortedArray.push(instance);
    }
  }

  return sortedArray;
};
arrP1 = [1, 0, 2, 1, 2, 0, 1, 2, 0, 2, 1, 1, 1, 2, 0];
// console.log(sort012sSolution1(arrP1));

// solution 2 - using 3 pointers - 0(n) - time / space - 0(1)
const sort012sSolution2 = (a) => {
  let lo = 0;
  let hi = a.length - 1;
  let mid = 0;
  let temp = 0;
  while (mid <= hi) {
    if (a[mid] == 0) {
      temp = a[lo];
      a[lo] = a[mid];
      a[mid] = temp;
      lo++;
      mid++;
    } else if (a[mid] == 1) {
      mid++;
    } else {
      temp = a[mid];
      a[mid] = a[hi];
      a[hi] = temp;
      hi--;
    }
  }
  return a;
};
// console.log(sort012sSolution2(arrP1));

// ----------------------------------------- problem 2 --------------------------------------------
// Find the repeating and the missing
// problem link - https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/

// solution 1 space - o(n) + o(3) / time - o(2n)
const FindMissingRepeatingS1 = (arr) => {
  const itemCounts = {};
  let missingNumber = arr[0];
  let repeatingNumber = arr[0];
  let trackNumber = 1;

  arr.forEach((item) => {
    if (itemCounts[item]) itemCounts[item]++;
    else itemCounts[item] = 1;
  });

  for (let item in itemCounts) {
    if (item != trackNumber) {
      missingNumber = trackNumber;
    }
    if (itemCounts[item] > 1) repeatingNumber = item;
    trackNumber++;
  }

  return { missingNumber: missingNumber, repeatingNumber: repeatingNumber };
};
arrP2 = [4, 3, 6, 2, 1, 1];
// console.log(FindMissingRepeatingS1(arrP2));

// --------------------------------------------- problem 3 -------------------------------
// problem name - Efficiently merging two sorted arrays with and without extra space
// problem link - https://www.geeksforgeeks.org/efficiently-merging-two-sorted-arrays-with-o1-extra-space/

// solution 1
// use another array to store the element;

const mergeArrayS1 = (arr1, arr2, n, m) => {
  const sortedArray = [];

  let i = 0;
  let j = 0;

  while (i <= n - 1 && j <= m - 1) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }

    // checking for remaining elements
    if (i > n - 1 && j < m)
      for (let i = j; i < m - 1; i++) sortedArray.push(arr2[j]);
    if (j > m - 1 && i < n)
      for (let k = i; k < n - 1; k++) sortedArray.push(arr1[k]);
  }

  return sortedArray;
};

arr1P3 = [1, 5, 9, 10, 15, 20];
arr2P3 = [2, 3, 8, 13];
// console.log(mergeArrayS1(arr1P3, arr2P3, arr1P3.length, arr2P3.length));

// solution 2
function mergeArrayS2(arr1, arr2, n, m) {
  // Now traverse the array1 and if
  // arr2 first element
  // is less than arr1 then swap
  for (let i = 0; i < n; i++) {
    if (arr1[i] > arr2[0]) {
      // Swap
      let temp = arr1[i];
      arr1[i] = arr2[0];
      arr2[0] = temp;

      // After swapping we have to sort the array2
      // again so that it can be again swap with
      // arr1

      // We will store the firstElement of array2
      // and left shift all the element and store
      // the firstElement in arr2[k-1]
      let firstElement = arr2[0];

      let k;

      for (k = 1; k < m && arr2[k] < firstElement; k++) {
        arr2[k - 1] = arr2[k];
      }
      arr2[k - 1] = firstElement;
    }
  }

  // Read the arr1
  for (let i = 0; i < n; i++) {
    console.log(arr1[i] + " ");
  }

  // Read the arr2
  for (let i = 0; i < m; i++) {
    console.log(arr2[i] + " ");
  }
}

// console.log(mergeArrayS2(arr1P3, arr2P3, 6, 4));

// --------------------- problem 4 ----------------------------------------
// problem name - max sub array inside an array
// problem link - https://leetcode.com/problems/maximum-subarray/

//solution 1

// const maxSumS1 = (arr) => {
//   let max = 0;
//   let sum = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       for (let k = 0; k < arr.length; k++) {
//         sum = sum + arr[k];
//         max = Math.max(max, sum);
//       }
//     }
//   }

//   return max;
// };

arr1P4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSumS1(arr1P4));

// solution 3 - kadane algorithm

const maxSumS3 = (arr) => {
  let a1 = 0;
  let a2 = arr[0];
  arr.forEach((i, a) => {
    a1 = Math.max(i, a1 + i);
    a2 = Math.max(a2, a1);
  });
  return a2;
};

// console.log(maxSumS3(arr1P4));

// -------------------------------------------------problem 5 ------------------------------------
// problem name - Merge Intervals
// problem link - https://leetcode.com/problems/merge-intervals/

const mergeIntervalsP1 = (arr) => {
  for (let i in arr) {
    for (let j = i; j <= arr.Length; j++) {
      console.log("new element", j);
    }
  }
};

arrP5 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(mergeIntervalsP1(arrP5));
