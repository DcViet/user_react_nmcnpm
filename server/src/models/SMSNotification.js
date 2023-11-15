// src/models/SMSNotification.js
const Notification = require('./Notification');

class SMSNotification extends Notification {
  sendSMS() {
    // Gửi thông báo qua SMS
  }
}

module.exports = SMSNotification;
