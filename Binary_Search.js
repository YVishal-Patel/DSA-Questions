// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let start  = 0;
    let end = nums.length -1;
    let mid;
    if(nums[0] === target){
        return 0;
    }
    for(let i=0;i<nums.length+1;i++){
         mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            return mid;
        }else if(target < nums[mid]){
            end = mid -1
        }else{
            start = mid +1;
        }
    }
    return -1;
    
};