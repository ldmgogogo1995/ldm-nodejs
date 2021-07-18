const express = require('express')
const router = express.Router()
const connection = require('../db/connect');
let sql;

//图书馆列表
router.get('/list', (req, res) => {
    console.log('查询图书馆列表')
    res.send({ code: 200, msg: '查询图书馆列表成功' })
})


module.exports = router