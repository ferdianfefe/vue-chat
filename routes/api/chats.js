const router = require('express').Router()
const authenticateToken = require('../../middleware/verifyToken')
const Chat = require('../../model/Chat')
const Room = require('../../model/Room')

//Post chat message
router.post('/', authenticateToken, (req, res) => {
    // Check if message is empty
    if (req.body.message == null) {
        return res.status(400).json({
            success: false,
            msg: 'Message cannot be empty'
        })
    }

    // Check if room already exists
    Room.findOne({
        $and: [{
            participants: { $in: req.user._id }
        }, {
            participants: { $in: req.body.receiverId }
        }]
    }, (err, result) => {
        if (err) throw err
        if (result != null) {

            // If exists, save chat using that room _id
            const newChat = new Chat({
                sender: req.user._id,
                room: result._id,
                message: req.body.message
            })

            newChat.save()
                .then(message => {
                    return res.status(201).json({
                        success: true,
                        msg: 'Message saved',
                        value: message
                    })
                })
        } else {
            // Create new room
            Room.create({
                participants: [req.user._id, req.body.receiverId]
            }, (err, result) => {
                if (err) throw err
                Chat.create({
                    sender: req.user._id,
                    room: result._id,
                    message: req.body.message
                }, (err, message) => {
                    if (err) throw err
                    res.status(201).json({
                        success: true,
                        msg: 'Message saved',
                        value: message
                    })
                })
            })
        }


    })
})

// Get chat messages
router.get('/', authenticateToken, (req, res) => {
    Chat.find()
        .populate('room')
        .then(messages => {
            res.status(200).json({
                success: true,
                value: messages
            })
        })
})

module.exports = router