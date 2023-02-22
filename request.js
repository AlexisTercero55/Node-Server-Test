const axios = require('axios');
const fs = require('fs');

const downloadPdf = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3000/pdf',
      responseType: 'stream'
    });

    const filePath = './downloads/downloaded-file.pdf';
    const writeStream = fs.createWriteStream(filePath);

    response.data.pipe(writeStream);

    return new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });
  } catch (error) {
    console.error(error);
  }
};

downloadPdf();
