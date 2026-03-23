class Company5{
    login(){
        console.log("comapany login account");
    }
}
class Admin extends Company5{
    showMessage(){
        console.log("this is login message");
    }
}

class User extends Company5{
    showMessage(){
        console.log("this is user login message");
    }
}

const admin=new Admin();
admin.showMessage();

const  user =new User();
user.showMessage();