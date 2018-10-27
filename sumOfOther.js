function sumOfOther(arr) {
let sum = arr.reduce((acc, rss)=>acc+rss);
return arr.map((num)=>sum-num);
}
