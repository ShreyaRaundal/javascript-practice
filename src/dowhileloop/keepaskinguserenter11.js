let num;
do{
    num=Number(prompt("Enter the number"));
    if(num>11) {
        console.log("The number is greater then a 11");
    }else{
        console.log("The number is less then 11");
    }
}while(num<=11);
