const express = require('express');
const app = express();
const path = require('path');

app.get('/pdf', function(req, res) {
  const filePath = path.join(__dirname, 'file.pdf');
  res.sendFile(filePath);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
