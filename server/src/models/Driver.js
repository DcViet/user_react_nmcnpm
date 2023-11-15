// src/models/Driver.js
const User = require('./User');

class Driver extends User {
  constructor(driverId, name, phoneNumber, licenseNumber, avatar) {
    super(driverId, name, phoneNumber);
    this.licenseNumber = licenseNumber;
    this.avatar = avatar;
    this.ratings = [];
    this.bookings = [];
  }

  confirmBooking() {
    // Xác nhận đơn đặt xe
  }

  cancelBooking() {
    // Hủy đơn đặt xe
  }
}

module.exports = Driver;
