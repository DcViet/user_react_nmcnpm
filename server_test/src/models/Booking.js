class Booking {
    constructor(bookingId, status, customer, driver, location) {
      this.bookingId = bookingId;
      this.status = status;
      this.customer = customer;
      this.driver = driver;
      this.location = location; // Mối quan hệ 1-1 với Location
    }
  }