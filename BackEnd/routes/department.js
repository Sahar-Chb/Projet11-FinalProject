const express = require('express');

const router = express.Router();
const { create, getAll, byid, del, update } = require('../controllers/department');

router.post('/create', create);
router.get('/all', getAll);
router.get('/byid/:id', byid);
router.delete('/delete/:id', del);
router.put('/update/:id', update);





module.exports = router;