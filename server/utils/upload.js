const { dataURI } = require('./helpers');
const { uploader } = require('../config/cloudinary');

module.exports = (req) =>{
    return new Promise((resolve, reject) =>{
        const file = dataURI(req).content;
        uploader
          .upload(file)
          .then((res) => {
              resolve(res); 
          })
          .catch((err) => {
              reject(err);
          });
    });
};