const express = require('express')
const router = express.Router()
const { getipbyid, getAllips, addip, updateip, deleteip } = require('../controllers/ipControllers')


router.route('/ips').get(getAllips)
router.route('/ip/:id').get(getipbyid)
router.route('/addip').post(addip)
router.route('/updateip/:id').patch(updateip)
router.route('/deleteip/:id').delete(deleteip)
module.exports = router;
