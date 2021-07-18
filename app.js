const express = require('express');
const app = express();
const userRoute = require(__dirname + '/routes/user')
const articleRoute = require(__dirname + '/routes/article')

app.use('/user', userRoute);
app.use('/article', articleRoute)

app.listen('8088', () => {
    console.log('server start on 8088');
})