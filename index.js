const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const socketio = require('socket.io')
const users = require('./routes/api/users')
const chats = require('./routes/api/chats')
const passport = require('passport')

// Models
const Room = require('./model/Room')
const User = require('./model/User')
const { disconnect } = require('process')

// Initialize app
const app = express()

// Middlewares
// Form data middleware
app.use(express.urlencoded({
    extended: false
}))
// JSON body middlware

app.use(express.json())
// CORS middleware
app.use(cors())

// Passport middleware
app.use(passport.initialize())

// Bring in strategy
require('./config/passport')(passport)

// Set static directory
app.use(express.static(path.join(__dirname, 'public')))

// Mongodb configuration
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Database connection established`)
    })
    .catch(err => {
        console.log(`Cannot connect to database: ${err}`)
    })

// Routes
app.use('/api/users', users)
app.use('/api/chats', chats)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Server listen
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
const io = socketio(server)
// Socket io
io.on('connection', socket => {
    socket.on('online', userId => {
        User.updateOne({ _id: userId }, { isOnline: true }, (err, res) => {
            if (err) throw err
            socket.broadcast.emit('online', userId)
        })
    })

    socket.on('offline', userId => {
        User.updateOne({ _id: userId }, { isOnline: false }, (err, res) => {
            if (err) throw err
            socket.broadcast.emit('offline', userId)
        })
    })
    socket.on('send-message', msg => {
        console.log(msg)
        socket.broadcast.emit('message', msg)
    })
})