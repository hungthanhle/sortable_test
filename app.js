const express = require('express');
const app = express();
const path = require('path');

// Đường dẫn tới thư mục chứa tệp JavaScript của bạn
const publicPath = path.join(__dirname);

// Đặt thư mục chứa tệp tĩnh
app.use(express.static(publicPath));

// Để truy cập tệp index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'hung_test.html'));
});

// Chạy máy chủ trên cổng 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
