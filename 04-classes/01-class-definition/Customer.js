var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("John", "Doe2");
//myCustomer.firstName = "John";
//myCustomer.lastName = "Doe";
console.log("Customer: ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
