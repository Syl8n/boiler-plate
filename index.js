const express = require('express'), app = express(), port = 5000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const { User } = require("./models/User")

const mongoose = require('mongoose')
const { mongoURI } = require('./config/dev')
mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.post('/signin', (req, res) => {
    const user = new User(req.body)
    user.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({success: true})
    })
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))