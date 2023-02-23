const fs = require('fs');

function getIpAddressFromEnvFile(envFilePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(envFilePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.split('\n');
      const ipLine = lines.find((line) => line.startsWith('IP_ADDRESS='));
      if (!ipLine) {
        reject(new Error('IP_ADDRESS not found in .env file'));
        return;
      }

      const ipAddress = ipLine.substring('IP_ADDRESS='.length);
      resolve(ipAddress);
    });
  });
}

module.exports = { getIpAddressFromEnvFile };


// Usage:
// getIpAddressFromEnvFile('.env')
//   .then((ipAddress) => {
//     console.log(`IP address read from .env file: ${ipAddress}`);
//   })
//   .catch((err) => {
//     console.error(`Error reading IP address from .env file: ${err}`);
//   });
