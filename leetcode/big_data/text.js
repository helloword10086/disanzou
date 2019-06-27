const arr = [1,2,3,4,5,6,7,8,9,0]
const chunk = (arr,size)  => 
  Array.from({
      length: Math.ceil({ length:arr.length / size} , (v,i) =>arr.slice(i  * size, i*size +size))
  })
;
