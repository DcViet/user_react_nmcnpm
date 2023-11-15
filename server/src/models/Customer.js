// src/models/Customer.js
class Customer {
    constructor(customerId, name, phoneNumber) {
      this.customerId = customerId;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.bookings = [];
    }
  
    addBooking(booking) {
      this.bookings.push(booking);
    }
  }
  