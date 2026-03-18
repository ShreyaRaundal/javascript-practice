function largenum(a,b,c){
    let max=0;
    if(b<max){
        max=b;
    }
    if(c>max){
        max=c;
    }
    return max;
}
console.log(largenum(4,6,8));
