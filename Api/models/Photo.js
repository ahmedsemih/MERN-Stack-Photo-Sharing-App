const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({

    imageUrl: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }
    
},{versionKey:false});

const Photo=mongoose.model('Photo',PhotoSchema);

module.exports=Photo;