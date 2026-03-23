let arr=[10,20,30,40,50,60,70,80,90];

let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }

}
console.log(max);
