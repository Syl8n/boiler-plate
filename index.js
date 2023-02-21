const express = require('express'), app = express(), port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dbadmin:1234@boiler-plate.fipwkvw.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app on http://localhost:${port}`))