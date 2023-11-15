// Import các module cần thiết
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import các class từ thư mục models
const User = require('./src/models/User');
const Driver = require('./src/models/Driver');
const Notification = require('./src/models/Notification');
const SMSNotification = require('./src/models/SMSNotification');
const Location = require('./src/models/Location');
const LocationTracking = require('./src/models/LocationTracking');

// Tạo ứng dụng Express
const app = express();
const port = 5000;

// Áp dụng middleware CORS
app.use(cors());

// Phục vụ các tệp tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));


// Tuyến đường trả về thông tin của đối tượng User
app.get('/user', (req, res) => {
  const user = new User('123', 'John Doe', '123-456-7890');
  res.json(user);
});


// Định nghĩa một tuyến đường cho URL gốc ("/")
app.get('/', (req, res) => {
  res.send('Xin chào từ trang chủ!');
});

// Sử dụng các class từ thư mục models
const user = new User('123', 'John Doe', '123-456-7890');
const driver = new Driver('456', 'Jane Doe', '987-654-3210', 'ABC123', 'driver_avatar.jpg');
const notification = new Notification(user, 'Your ride is confirmed!');
const smsNotification = new SMSNotification(user, 'Your ride is confirmed!');
const location = new Location(37.7749, -122.4194, user);
const locationTracking = new LocationTracking(driver);

// Các hoạt động khác với các đối tượng đã tạo
user.doSomething();
driver.confirmBooking();
locationTracking.updateDriverLocation();

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
});
