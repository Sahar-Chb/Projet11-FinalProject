const express = require('express');

const router = express.Router();
const multer = require('multer');

const { create, getAll, byid, del, update } = require('../controllers/employee');

let filename = '';

const myStorage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, redirect) => {
    filename = Date.now() + '.' + file.mimetype.split('/')[1];
    redirect(null, filename);
  },
  })

const upload = multer({ storage: myStorage });

router.post('/create', upload.any('image'), (req, res) => {
  create(req, res, filename);
  filename = '';
});

router.get('/all', getAll);
router.get('/byid/:id', byid);
router.delete('/delete/:id', del);

router.put('/update/:id', upload.any('image'), (req, res) => {
  update(req, res, filename);
  filename = '';
});



module.exports = router;