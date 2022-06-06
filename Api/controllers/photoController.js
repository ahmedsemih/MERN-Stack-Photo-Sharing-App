const Photo = require('../models/Photo')

exports.getAllPhotos = async (req, res) => {
    try {
        var photos = await Photo.find({});

        res.status(200).json({
            status: 'success',
            photos
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    };
};

exports.getPhotosByCategoryId = async (req, res) => {
    try {
        var photos = await Photo.findOne({ category: req.query.category });

        res.status(200).json({
            status: 'success',
            photos
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    };
};

exports.getPhotosByPublisherId = async (req, res) => {
    try {
        var photos = await Photo.findOne({ publisher: req.qury.publisher });

        res.status(200).json({
            status: 'success',
            photos
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    };
};

exports.getPhotoById = async (req, res) => {
    try {
        var photo = await Photo.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            photo
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    };
};

exports.addPhoto = async (req, res) => {
    try {
        var photo = await Photo.create(req.body);

        res.status(201).json({
            status: 'success',
            photo
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    };
};

exports.updatePhoto = async (req, res) => {
    try {
        var photo = await Photo.findByIdAndUpdate(req.params.id, {
            imageUrl: req.body.imageUrl,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            publisher: req.body.publisher
        }, { new: true });

        res.status(200).json({
            status: 'success',
            photo
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    };
};

exports.deletePhoto = async (req, res) => {
    try {
        var photo = await Photo.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
            photos
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    };
};


// LIKE SYSTEM

exports.addLike = async (req, res) => {
    try {

        const photo = await Photo.findById(req.params.id);
        photo.likes+=1;
        photo.save();

        res.status(200).json({
            status: 'success',
            photo
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        })
    }
}

exports.deleteLike = async (req, res) => {
    try {

        const photo = await Photo.findById(req.params.id);
        photo.likes-=1;
        photo.save();

        res.status(200).json({
            status: 'success',
            photo
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        })
    }
}