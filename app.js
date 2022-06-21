const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model/index.js')

const app = express()

const PORT = process.env.PORT || 2333

// configuration of express
app.use(morgan('dev'))

app.use(express.json())
app.use(cors())


app.use('/api', router)
app.use(errorHandler())


app.listen(PORT, () => {
    console.log("server is running on http://localhost:", PORT)
})
