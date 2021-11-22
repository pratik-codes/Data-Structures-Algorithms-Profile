// problem 1 - search element in a 2d matrix
// solution/problem - https://baffinlee.com/leetcode-javascript/problem/search-a-2d-matrix.html

// solution 1
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var row = searchRow(matrix, target, 0, matrix.length - 1);
  return row === -1
    ? false
    : searchArray(matrix[row], target, 0, matrix[row].length - 1);
};

var searchRow = function (matrix, target, top, bottom) {
  if (top > bottom) return -1;
  var mid = top + Math.floor((bottom - top) / 2);
  var len = matrix[mid].length;
  if (len === 0) return -1;
  if (matrix[mid][0] <= target && target <= matrix[mid][len - 1]) {
    return mid;
  } else if (target < matrix[mid][0]) {
    return searchRow(matrix, target, top, mid - 1);
  } else {
    return searchRow(matrix, target, mid + 1, bottom);
  }
};

var searchArray = function (arr, target, left, right) {
  if (left > right) return false;
  var mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] > target) {
    return searchArray(arr, target, left, mid - 1);
  } else {
    return searchArray(arr, target, mid + 1, right);
  }
};

// solution 2
const searchInMatrix = (matrix) => {
  const i = 0;
  const j = matrix[0].length - 1;
  if (matrix[i][j] === x) {
    print("found the number");
    return -1;
  }
  if (matrix[i][j] > x) {
    j--;
  } else {
    i++;
  }
};

// problem 3 - Single Majority Element - n/2
// problem link - https://leetcode.com/problems/majority-element/

// solution 1
// brute force with time complexity of n^2

// solution 2 - using hashmap
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var map = {};
  var max = 0;
  var majorNum = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (!map[nums[i]]) map[nums[i]] = 0;
    map[nums[i]]++;
    if (map[nums[i]] > max) {
      majorNum = nums[i];
      max = map[nums[i]];
    }
  }
  return majorNum;
};

// solution 3 moore algorithm
var majorityElement = function (nums) {
  let maj = 0,
    count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[maj]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      maj = i;
      count = 1;
    }
  }
  return nums[maj];
};

// problem 5
// grid unique paths - https://leetcode.com/problems/unique-paths/
// video - https://www.youtube.com/watch?v=t_f0nwwdg5o&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=19&ab_channel=takeUforward

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var dp = Array(m);
  if (!m || !n) return 0;
  for (var i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (var j = 0; j < n; j++) {
      if (j > 0 && i > 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      else if (j > 0 && i === 0) dp[i][j] = dp[i][j - 1];
      else if (j === 0 && i > 0) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = 1;
    }
  }
  return dp[m - 1][n - 1];
};
