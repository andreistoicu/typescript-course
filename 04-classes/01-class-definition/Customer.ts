class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}


let myCustomer = new Customer("John", "Doe2");

//myCustomer.firstName = "John";
//myCustomer.lastName = "Doe";

console.log(`Customer: ${myCustomer.firstName} ${myCustomer.lastName}`);