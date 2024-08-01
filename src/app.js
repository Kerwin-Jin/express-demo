const path = require('path')

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const StudentRouter = require('./routes/studentRouter')
const UploadRouter = require('./routes/uploadRouter')
const AdminRouter = require('./routes/adminRouter')
const CaptchaRouter = require('./routes/captchaRouter')

const authMiddleware = require('./middleware/authMiddleware')
const errorMiddleware = require('./middleware/errorMiddleware')
const corsMiddleware = require('./middleware/corsMiddleware')
const ClassesRouter = require('./routes/classesRouter')
const BookRouter = require('./routes/bookRouter')
const EmailRouter = require('./routes/emailRouter')

const app = express()

app.use(express.static(path.resolve(__dirname, './public'), { maxAge: 3600 * 1000 }))
app.use(express.static(path.resolve(__dirname, './resource'), { maxAge: 3600 * 1000 }))

app.use(cookieParser())

app.use(express.json())

// app.use(corsMiddleware)
// app.use(cors({ credentials: true, origin: ['http://localhost:5500', 'http://localhost:8080'] }))

app.use(cors({
  credentials: true,
  origin: function (origin, cb) {
    const whiteList = ['http://localhost:5500', 'http://localhost:8080', 'http://127.0.0.1:5173']
    console.log(origin)
    if (whiteList.indexOf(origin) > -1 || !origin) {
      cb(null, true)
    } else {
      cb(new Error('cors not allowed'), false)
    }
  }
}))

app.use('/api/captcha', CaptchaRouter)
app.use('/api/upload', UploadRouter)

/** 鉴权 */
app.use(authMiddleware)
app.use('/api/book', BookRouter)
app.use('/api/classes', ClassesRouter)
app.use('/api/student', StudentRouter)
app.use('/api/admin', AdminRouter)
app.use('/api/email', EmailRouter)

app.use(errorMiddleware)

app.listen(8080, () => {
  console.log('The server is running on port, click http://localhost:8080')
})
