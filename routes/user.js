const express = require('express');
const userRoutes = express.Router();
const userCtrl = require('../controllers/user');

const {LOGIN, PROFILE, DELETE, REGISTER} = require('../utils/constants/app_constants').ROUTES.USER;

userRoutes.post(LOGIN, userCtrl.login);
userRoutes.get(PROFILE, userCtrl.profile);
userRoutes.get(DELETE, userCtrl.deleteProfile);
userRoutes.post(REGISTER, userCtrl.register);
module.exports = userRoutes;