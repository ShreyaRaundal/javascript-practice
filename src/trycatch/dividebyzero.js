function divideNumber(a,b){
    try{
        if(b==0){
            throw new error("Cannot divide by zero");
        }

        let result=a/b;
        console.log("Result :"+result);
    }catch(error){
        console.log("Error ",error.message);

    }

}
divideNumber(10,2);
divideNumber(10,0);

