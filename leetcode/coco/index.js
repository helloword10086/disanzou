console.log(11 >> 1);//右移运算符  针对二进制 0000 1011
// 利用位移运算实现缩小一倍或扩大一倍
// N piles of bananas 每卦香蕉的数量不一样
// [3,6,7,11], H 小时内吃完   一小时几根香蕉  一小时内吃N根香蕉  一次只能吃一把，以孝寺
/**
 * @desc 最少吃香蕉的速度 ，在规定的时间内吃完
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles, H){
     let lo = 1;
    //  let mid = lo +((h1-lo) >> 1);
     h1 = Math.max(...piles);
    //  let mid = lo +((h1-lo) >> 1);
     while(lo <= h1){
    //    lo++
    let mid = lo +((h1-lo) >> 1);
    if(catEatAllBananas(piles,H, mid)){
        hi = mid -1;
     }else{
         lo = miid + 1;
     }
     
}
return lo;
}
/**
 * desc 判断是否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H
 * @param {number} mid 
 * @return {boolean}
 */
function catEatAllBananas(piles, H , mid){
    let h = 0;
    //  mid,余下的此吃完
     for(let pile of piles){
         h += Math.ceil(pile / mid);
     }
    return h <= H;
}
let piles = [3,6,7,11];

// console.log(catEatAllBananas(piles,8,1));
console.log(minEatingSpeed(piles,8))