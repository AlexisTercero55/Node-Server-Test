const os = require('os');



const networkInterfaces = os.networkInterfaces();
const firstInterface = networkInterfaces[Object.keys(networkInterfaces)[0]];
const ipAddress = firstInterface.find((iface) => iface.family === 'IPv4').address;

console.log(`Server IP address: ${ipAddress}`);
