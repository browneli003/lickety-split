const fs = require('fs');

// Writing the HTML file
const writeFile = htmltemp => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', htmltemp, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
}

module.exports = writeFile;