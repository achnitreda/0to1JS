/**
 * name: twoSum
 * Brute Force - Linear Search
 * O(n^2)
 */

const nums = [2,5,5,11]
const target = 10
 
var twoSum = function(nums, target) { 
  for(let curr=0; curr < nums.length; curr++){ //O(n)
    const complement = target - nums[curr]
    for(let next = (curr+1); next < nums.length; next++){ //O(n)
        if(complement === nums[next]){
            return [curr, next]
        }
    }
  }
};

console.log(twoSum(nums, target));


/**
 * name: pivotIndex
 * Brute Force
 * O(n)
 */

let nums = [2,-1,1]
var pivotIndex = function(nums) {
    let total = 0; let leftSum = 0;
    total = nums.reduce((a,b)=> a+b,0)
    for(let i=0; i<nums.length; i++){
        rightSum = total - leftSum - nums[i] 
        // if(leftSum == rightSum){
        //     return i;
        // }
        leftSum += nums[i];
        console.log(leftSum);
        console.log(nums[i]);
    }
    return -1;
};

console.log(pivotIndex(nums));