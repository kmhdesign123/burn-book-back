const router = require('express').Router()
const authCtrl = require('../controllers/auth.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.delete('/delete', checkAuth, authCtrl.deleteAccount)

module.exports = router
