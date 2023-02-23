const express = require('express');
const app = express();
const path = require('path');
const { getIpAddressFromEnvFile } = require('./readenvfile');

app.get('/pdf', function(req, res) {
  const filePath = path.join(__dirname, 'file.pdf');
  res.sendFile(filePath);
});


getIpAddressFromEnvFile ('.env')
  .then( IP => {
    app.listen(3000,'0.0.0.0', function() {
      console.log(`Server listening on port ${IP}:3000 uwu`);
    });
  })
  .catch((err) => {
    console.error(`Error reading IP address from .env file: ${err}`);
  });

// app.listen(3000,'0.0.0.0', function() {
//   console.log('Server listening on port 192.168.1.100:3000');
// });
