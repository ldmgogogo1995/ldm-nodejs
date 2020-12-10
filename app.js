const express = require('express');
const app = express();
const userRoute = require(__dirname + '/routes/user')
app.use('/user',userRoute);












app.listen('8088', () => {
  console.log('server start on 8088');
})