class Employeee3{
    work() {
        console.log("Employee works");
    }
}
class Developer extends Employeee3{
    work(){
        console.log("Developers write code");
    }

}

let Dev=new Developer();
Dev.work();
