/*  Create a class called MovieTicket to represent a cinema ticket sale.

    The class must have the following properties:

        - basePrice
        - customerType (using the codes described below)

    The customerType must be set using a setter. If the value is invalid (not 1, 2, 3, or 4), display an error message and do not change the current value.

    Create a getter called finalPrice that returns the ticket price after applying the discount according to the table below:

    Customer Type Codes:
        1 – Student: 50% discount
        2 – Senior (over 60): 30% discount
        3 – Child (under 12): 40% discount
        4 – Regular Customer: no discount
*/

class MovieTicket {

    constructor (basePrice, customerType) {
        this.basePrice = basePrice;
        this._customerType = customerType;
    }

    get finalPrice () {

        if (this._customerType === 1) { //'student'
            return this.basePrice * 0.5; 
        } 
        else if (this._customerType === 2) { //'senior'
            return this.basePrice * 0.7;
        } 
        else if (this._customerType === 3) { //'child'
            return this.basePrice * 0.6;
        } 
        else { // Regular Costumer 
            return this.basePrice;
        }
    }

    set customerType (type) {

        if (type === 1 || type  === 2 || type === 3 || type === 4) {

            this._customerType = type;
        } 
        else {
            return console.log(`ERROR: Invalid option selected `);
        }

    }

}

const ticket = new MovieTicket (25, 1);
console.log(`Final price: R$${ticket.finalPrice.toFixed(2)}`);

ticket.customerType = 2;
console.log(`Final price: R$${ticket.finalPrice.toFixed(2)}`);

ticket.customerType = 3;
console.log(`Final price: R$${ticket.finalPrice.toFixed(2)}`);

ticket.customerType = 4;
console.log(`Final price: R$${ticket.finalPrice.toFixed(2)}`);

ticket.customerType = 5;
