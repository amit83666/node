const userController = require('../controllers/controller');
const hotelController = require('../controllers/hotelController');
const router = require('express').Router();

router.post('/adduser', userController.addUser);
//router.post('/addhotel', hotelController.addHotel);
module.exports = router;