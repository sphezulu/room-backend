const  express = require('express')
const  authCtrl = require('./../controller/auth.controller')


const router = express.Router()

router.route('/auth/signin')
    .post(authCtrl.signin)

router.route('/auth/signout')
    .get(authCtrl.signout)

module.exports = router