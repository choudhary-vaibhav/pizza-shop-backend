const express = require('express');
const userRoutes = express.Router();
const userCtrl = require('../controllers/user');

const {LOGIN, PROFILE, DELETE, REGISTER, UPDATE, CHANGE_PASSWORD} = require('../utils/constants/app_constants').ROUTES.USER;

userRoutes.post(LOGIN, userCtrl.login);
userRoutes.get(PROFILE, userCtrl.profile);
userRoutes.post(DELETE, userCtrl.deleteProfile);
userRoutes.post(REGISTER, userCtrl.register);
userRoutes.post(UPDATE, userCtrl.update);
userRoutes.post(CHANGE_PASSWORD, userCtrl.changePwd)
module.exports = userRoutes;