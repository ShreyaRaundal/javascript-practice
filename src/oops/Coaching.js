class Coaching{
    constructor(name,teacher){
        this.name=name;
        this.teacher=teacher;

    }
    showDetails(){
        console.log("name of coaching : "+this.name);
        console.log("teacher for subject : "+this.teacher);
    }
}

let Coaching1=new Coaching('qsider','Tejas');
Coaching1.showDetails();
