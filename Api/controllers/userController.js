const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: 'success',
            newUser
        });

    } catch (error) {

        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.loginUser = (req, res) => {
    try {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, same) => {
                    if (same) {
                        var currentUser = user;
                        res.status(200).json({
                            status: 'success',
                            currentUser
                        });
                    } else {
                        res.status(200).json({
                            status: 'failed',
                            error: 'Wrong email or password'
                        });
                    }
                });
            }
        });
    } catch (error) {

        res.status(404).json({
            status: 'failed',
            error
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');

        res.status(200).json({
            status: 'success',
            users
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        res.status(200).json({
            status: 'success',
            user
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};


// FOLLOWING SYSTEM

exports.addFollower = async (req, res) => {
    try {
        const follower = await User.findById(req.body.followerId);
        const followed = await User.findById(req.body.followedId);
        const isFriend = false;

        follower.followings.forEach((f) => {
            if (f.id === req.body.followedId) isFriend = true;
        });

        if (!isFriend) {
            follower.followings = [...follower.followings, { "id": req.body.followedId }];
            followed.followers += 1;
            follower.save();
            followed.save();

            res.status(201).json({
                status: 'success'
            });
        } else {
            res.status(200).json({
                status: 'failed',
                message: "You are already friend"
            });
        }

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteFollower = async (req, res) => {
    try {
        const followed = await User.findById(req.body.followedId);
        const follower = await User.findById(req.body.followerId);

        follower.followings.forEach((f, index) => {
            if (f.id === req.body.followedId) {
                follower.followings[index] = null
                followed.followers -= 1;
                followed.save();
                follower.save();
            }
        });

        res.status(200).json({
            status: 'success'
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}