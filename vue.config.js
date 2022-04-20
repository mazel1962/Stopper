const fs = require('fs');

module.exports = {
  devServer: {
    open: process.platform === 'juancarlos',
    host: '0.0.0.0',
    port: 8080,
    https: {
      key: fs.readFileSync('C:/work/key.pem'),
      cert: fs.readFileSync('c:/work/cert.pem'),
    },
    hotOnly: false,
  },
};