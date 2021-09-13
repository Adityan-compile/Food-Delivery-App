const { dataURI } = require('./helpers');
const cloudinary = require('../config/cloudinary');

// module.exports = (file) => {
//   return new Promise((resolve, reject) => {
// dataURI(file)
//   .then((fileUri) => {
//     console.log('file uri', fileUri);
// cloudinary.uploader
//   .upload(file)
//   .then((res) => {
// resolve(res);
//   })
//   .catch((err) => {
// reject(err);
//   });
//   });
//       .catch((e) => {
//         reject(e);
//       });
//   });
// };

const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    let fileUri = 'data:image/jpeg;base64,' + file.buffer.toString('base64');
    cloudinary.uploader.upload(fileUri, (err, res) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = uploadFile;
