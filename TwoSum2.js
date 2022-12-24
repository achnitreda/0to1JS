const nums = [3,2,4]
const target = 5

// to accessed to second same element in array
// console.log(nums.indexOf(3,1));

var twoSum = function(nums, target) {
    let output = [];
    for(let i=0; i<nums.length; i++){
        // console.log(nums[i])
        // console.log(nums[i]+nums[i+1] == 6)
        // console.log(nums.indexOf(nums[i]));
        // console.log(nums.indexOf(nums[i+1],1));
        if(nums[i]+nums[i+1] == target){
            output.push(nums.indexOf(nums[i]),nums.indexOf(nums[i+1],1))
        }
        if(nums[i]+nums[i+2] == target){
            output.push(nums.indexOf(nums[i]),nums.indexOf(nums[i+2],1))
        }
    }
    return output
};

console.log(twoSum(nums,target));

// i passed 49 / 57 in leetcode i need to solve it 