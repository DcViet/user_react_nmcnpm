// Import các module cần thiết
const express = require('express');
const cors = require('cors');
const path = require('path');

// Tạo ứng dụng Express
const app = express();
const port = 5000;

// Áp dụng middleware CORS
app.use(cors());

// Phục vụ các tệp tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa một tuyến đường cho URL gốc ("/")
app.get('/', (req, res) => {
  res.send('Xin chào từ trang chủ!');
});

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
});
