
var containsDuplicate = function(nums) {
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            if(nums[j] == nums[i]) {
                return true
            }
        }
    }
    return false
};


var isUnique = function (nums) {
    nums = nums.sort();
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] == nums[i + 1]) {
            return true
        }
    }
    return false
}

var isUniqueSet = function (nums) {
    const set = new Set()
    for(const x of nums) {
        if(set.has (x)){
            return true
        }
        set.add(x)
    }
    return false
}