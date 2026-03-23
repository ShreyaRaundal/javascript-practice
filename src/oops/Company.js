class Construction{
    constructor(name,location) {
        this.name=name;
        this.location=location;

    }
    showDetails(){
        console.log("Company name : "+this.name);
        console.log("Company location : "+this.location);

    }

}
let company1=new Construction('Mumbai','Bangular');
company1.showDetails();