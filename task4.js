function findTargetIndexes(nums, targer) {

    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === targer){
                return [i, j]
            }
        }
      }
}


nums = [2,7,11,15]
target = 9
const result = findTargetIndexes(nums, target)
console.log(result)
