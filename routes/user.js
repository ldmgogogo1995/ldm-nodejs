const express = require('express')
const router = express.Router()
router.get('/list', (req, res) => {
  console.log('请求用户列表')
  res.send({ code: 200, data: {}, message: '查看用户成功' })
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
 