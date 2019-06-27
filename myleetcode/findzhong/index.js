var findMedianSortedArrays = function(nums1, nums2) {    
  let num1 = [...nums1, ...nums2];
  let num = num1.sort((a,b) => {return a-b;});
  let m = parseInt((num.length) / 2);    
  let l =num.length;
  if (l % 2 == 0) 
  {
      return (num[m] + num[m-1])/2;
  } 
  else 
  {
      return num[m];
  }
};
