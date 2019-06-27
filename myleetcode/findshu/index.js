var twoSum = function(nums, target) {
    var b = null;
    var a = null;
    var has = [];
    var arr = nums.map((item) => {
      return target-item
    })
  
    for(let i=0;arr[i]>0;i++){
       a = i
    var index = nums.find((item,index) =>{
        b=index;
        return item === arr[i]
      })
    }
    has = [b,a]
  
    console.log(has);
};
twoSum([8, 7, 2, 15],9)