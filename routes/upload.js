var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var router = express.Router();

// 単一ファイルアップロード
router.post('/', upload.single('file'), function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
  res.send('upload success');
});

// 複数ファイルアップロード
router.post('/multiple', upload.array('files'), function(req, res, next) {
  console.log(req.files);
  console.log(req.body);
  res.send('multiple upload success');
});

module.exports = router;
