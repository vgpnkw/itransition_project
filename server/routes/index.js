const Router = require('express')
const router = new Router()
const companyRouter = require('./companyRouter')
const userRouter = require('./userRouter')
const countryRouter = require('./countryRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/country', countryRouter)
router.use('/company', companyRouter)

module.exports = router
