var lengthOfLongestSubstring = function(s) {
  var sum = '';
  var max =0;
  var arr = [];
    for(let i=0; i<s.length; i++){
      for(let k=i;k<=(s.length)/2;k++){

        sum +=s[k] ;
       var a = s.indexOf(sum,k)
       if(a>0){
         for(let j=0;j<sum.length;j++){
            var b = sum[j].indexOf(sum[j],j)
         }
         if(b<0){
            if(max<sum.length){
              max = sum.length
            } 
         }
       }
      }
    }
     console.log(max)
    // return max
};
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("abcabbb")

