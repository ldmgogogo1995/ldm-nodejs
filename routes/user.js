const express = require('express')
const connection = require('../db/connect');
const router = express.Router()
let sql;
const httpReqFun = (req, res, type) => {
    switch (type) {
        case 'list':
            sql = `SELECT * FROM userList`
            connection.query(sql, (err, data, filds) => {
                if (err) {
                    res.send({ code: 500, err, message: '查询失败' })
                    return console.log(err)
                }
                res.send({ code: 200, data, message: '查看用户成功' })
            })
            break;
        case 'detail':
            const { id } = req.query
            if (!id) {
                res.send({ code: 0, data: null, message: '请传递需要查询的id' })
                return
            }
            sql = `SELECT * FROM userList WHERE id = ${id}`
            connection.query(sql, (err, data) => {
                if (err) {
                    res.send({ code: 500, err, message: '查询失败' })
                    return console.log(err)
                }
                res.send({ code: 200, data: data[0], message: '查看用户详情成功！' })
            })

            break;
        case 'add':

            break;
        case 'edit':

            break;
        case 'del':

            break;
        default:
            break;
    }

}
router.get('/list', (req, res) => {
    httpReqFun(req, res, 'list')
})
router.get('/detail', (req, res) => {
    console.log('查看详情')
    httpReqFun(req, res, 'detail')
})
router.post('/add', (req, res) => {

    console.log('添加用户')
    res.send({ code: 200, data: 0, message: '添加用户成功' })
})
router.put('/edit', (req, res) => {
    console.log('修改用户')
    res.send({ code: 200, data: 0, message: '修改用户成功' })
})
router.delete('/del', (req, res) => {
    console.log('删除用户')
    res.send({ code: 200, data: 0, message: '删除用户成功' })
})
module.exports = router