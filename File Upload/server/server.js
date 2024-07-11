const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(fileUpload());

// Serve static files from the 'client/public' directory
app.use(express.static(path.join(__dirname, 'client', 'public')));

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const uploadPath = path.join(__dirname, 'client', 'public', 'uploads', file.name);

  file.mv(uploadPath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${encodeURIComponent(file.name)}` });
  });
});

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'client', 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
