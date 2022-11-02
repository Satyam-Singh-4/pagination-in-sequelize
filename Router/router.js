const router=require('express').Router()
const controller=require('../Controller/pgcontroller')

router.post('/add',controller.bulkAdd)
router.post('/find',controller.findAll)

module.exports=router