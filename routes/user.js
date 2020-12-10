const express = require('express')
const router = express.Router()
router.get('/list', (req, res) => {
  console.log('请求用户列表')
})
module.exports = router