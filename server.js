var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
var fs = require('fs');
var path = require('path')


app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/jsons')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage }).array('file')



app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
});

const getListFileNames = (req, res) => {
  const directoryPath = "./public/jsons";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
      });
    });

    res.status(200).send(fileInfos);
  });
};


app.get('/names', getListFileNames)




var storageImages = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './public/images');
   },
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});

var uploadImages = multer({ storage: storageImages })


app.post('/dnd', uploadImages.array('file') , (req, res) =>{
  try {
      res.send(req.files);
  } catch(error) {
        console.log(error);
         res.send(400);
  }
});


app.use('/', express.static(path.join(__dirname, 'public/images')))


// отобразить все имена картинок
const getListImageNames = (req, res) => {
  const directoryPath = "./public/images";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan images!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
      });
    });

    res.status(200).send(fileInfos);
  });
};


app.get('/imagenames', getListImageNames)


app.listen(8000, function () {

  console.log('App running on port 8000');

});