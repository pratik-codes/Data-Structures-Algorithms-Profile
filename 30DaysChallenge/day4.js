// two number problem - https://leetcode.com/problems/two-sum/
// solution 1
var twoSum = function (nums, target) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let diff = target - cur;
    // Return answer if the current number was a diff from a previous number
    if (store[cur] !== undefined) return [store[cur], i];
    // Set diff to current index in store
    else store[diff] = i;
  }
};

// 4 ways problem - https://baffinlee.com/leetcode-javascript/problem/4sum.html
// solution 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];

  var len = nums.length;
  var res = [];
  var l = 0;
  var r = 0;
  var sum = 0;

  nums.sort((a, b) => a - b);

  for (var i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target)
      continue;

    for (var j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

      l = j + 1;
      r = len - 1;

      while (l < r) {
        sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
    }
  }

  return res;
};

// problem 3 - longest consective number
// problem link - https://leetcode.com/problems/longest-consecutive-sequence/

// solution1 - brute force sort element and then count it

// solution 2 - use a hash set
var longestConsecutive = function (nums) {
  // Handle base case of empty array
  if (!nums.length) return 0;

  // Give ability to look up nums by value
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    // Make sure we are starting at the beginning of the sequenece
    if (set.has(num - 1)) continue;

    let currNum = num;
    let currMax = 1;

    // Look numbers that make a consecutive sequence
    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    // Update max
    max = Math.max(max, currMax);
  }

  return max;
};

// longest sub array with 0 sum
// problem 4 -  https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

const longestSubArrayWithSumZeo = (arr) => {
  const sumIndexMap = {};
  const sum = 0;
  const map = 0;

  for (let i = 0; i < arr.length; i++) {
    const runningSum = sum + arr[i];

    if (sumIndexMap[arr[i]]) {
      const runningMax = i - sumIndexMap[arr[i]];
      if (runningMax > max) max = runningMax;
    } else sumIndexMap[runningSum] = i;
  }

  return max;
};
