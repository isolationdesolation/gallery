var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
var fs = require('fs');


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

app.use('/names/:name', function (req, res, next) {
  console.log('Image name:', req.params.name);
  next();
});


app.listen(8000, function () {

  console.log('App running on port 8000');

});