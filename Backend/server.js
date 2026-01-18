const path = require('path')
require('dotenv').config();
const express = require('express') ;
const app = express() ;
const requestLoggerMiddleware = require('./middlewares/requestLogger')
const errorHandlerMiddleware = require('./middlewares/errorHandler') ;


const categoryRouter = require('./routers/categoryRouter')
const db = require('./models') ;
const POST = 3000 ;

app.use(requestLoggerMiddleware) ;

app.use( express.static(path.join(__dirname, "public")));
app.use(express.json())



app.use('/api/category' , categoryRouter)
app.use(errorHandlerMiddleware)
db.sequelize.authenticate()
.then(() => {
    console.log('ket noi database thanh cong')
})
.catch((error) => {
    console.log('ket noi database that bai' , error)
})
app.listen(POST ,() => {
    console.log(`Su kien lang nghe tai http://localhost:${POST}`)
})