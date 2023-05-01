// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Given the sorted rotated array nums of unique elements,
// return the minimum element of this array.
// O(log n) time

/**
 * @param {number[]} nums
 * @return {number}
 */

// 그 다음 숫자가 지금 숫자보다 작으면 그 다음 숫자가 최소값

// const nums = [3, 4, 5, 1, 2]; // 1
// const nums = [4, 5, 6, 7, 0, 1, 2]; // 0
const nums = [11, 13, 15, 17]; // 11

var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      break;
    }
  }

  return min;
};

findMin(nums);
