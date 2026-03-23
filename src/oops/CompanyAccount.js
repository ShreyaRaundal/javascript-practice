class CompanyAccount{
    #revenue;

    constructor(revenue) {
        this.#revenue=revenue;

    }
    addRevenue(amount){
        this.#revenue+=amount;
    }
    showRevenue(){
        console.log("Show revenue :"+this.#revenue);
    }


}
let a1=new CompanyAccount(50000);
a1.addRevenue(500);
a1.showRevenue();