// app.js
const User = require('./src/models/User');
const Driver = require('./src/models/Driver');
const Notification = require('./src/models/Notification');
const SMSNotification = require('./src/models/SMSNotification');
const Location = require('./src/models/Location');
const LocationTracking = require('./src/models/LocationTracking');
const Booking = require('./src/models/Booking');

// Tạo một đối tượng Driver
const driver1 = new Driver('D001', 'John Doe', '123-456-7890', 'XYZ123', 'avatar.jpg');

// Tạo một đối tượng Notification
const notification1 = new Notification(driver1, 'New booking received!');

// Tạo một đối tượng SMSNotification
const smsNotification1 = new SMSNotification(driver1, 'Your ride is confirmed!');

// Tạo một đối tượng Location
const location1 = new Location(37.7749, -122.4194, null);

// Tạo một đối tượng LocationTracking
const locationTracking1 = new LocationTracking(driver1);

// Thêm mối quan hệ giữa Location và Booking khi tài xế nhận đơn đặt xe
const booking1 = new Booking('B001', 'Pending', null, driver1, location1);
location1.booking = booking1;
driver1.bookings.push(booking1);

// Log thông tin
console.log(driver1);
console.log(notification1);
console.log(smsNotification1);
console.log(location1);
console.log(locationTracking1);
console.log(booking1);
