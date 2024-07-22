
var arr = [-1,2,-5,4,-74,3,5,-643,-6,74];

arr.forEach(function(val, index){
    if(val<0){
        arr.splice(index, 1);
        index=0;
    }
})