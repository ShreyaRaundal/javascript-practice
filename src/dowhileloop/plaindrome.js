let num=1221;
let rev=0;

while (num>0){
    let digit=num%10;
    rev=rev*10+digit;
    num=Math.floor(num/10);
}
if(num===rev){
    console.log("Palindrome Number");
}else{
    console.log("Not a palindrome number");
}

