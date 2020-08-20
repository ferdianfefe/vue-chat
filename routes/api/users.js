const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../../model/User')
const secret = require('../../config/keys').secret
const authenticateToken = require('../../middleware/verifyToken')

// Register route
router.post('/register', (req, res) => {
    const {
        name,
        username,
        email,
        password,
        confirmPassword
    } = req.body

    // If password not match
    if (password !== confirmPassword) {
        return res.status(400).json({
            msg: 'Password do not match'
        })
    }

    // Check if username is duplicated
    User.findOne({ username })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    msg: 'Username is already taken'
                })
            }
        })

    // Check if email is duplicated
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    msg: 'Email is already registered'
                })
            }
        })

    // Data is valid, register the user
    let newUser = new User({
        name,
        username,
        email,
        password
    })

    // Hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save()
                .then(user => {
                    return res.status(201).json({
                        success: true,
                        msg: 'User registered successfully'
                    })
                })
        })
    })
})

// Login route
router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    success: false,
                    msg: 'Username is not found'
                })
            }

            // If usename found, compare password
            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User password is correct, send the JWT token to user
                        const payload = {
                            _id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email
                        }
                        jwt.sign(payload, secret, {
                            expiresIn: 604800
                        }, (err, token) => {
                            res.status(200).json({
                                success: true,
                                user,
                                token: `Bearer ${token}`,
                                msg: 'User logged in successfully'
                            })
                        })
                    } else {
                        // Incorrect password
                        return res.status(404).json({
                            success: false,
                            msg: 'Incorrect password'
                        })
                    }
                })
        })
})

// Profile route
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).json({
        user: req.user
    })
})

// Contacts route
router.get('/contacts', authenticateToken, (req, res) => {
    User.find()
        .then(users => {
            const userList = users.filter(user => user._id != req.user._id)
            res.status(200).json({
                success: true,
                value: userList
            })
        })
})

module.exports = router