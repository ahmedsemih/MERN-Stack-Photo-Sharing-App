const express = require('express');
const router = express.Router();

const { getAllPhotos, getPhotosByCategoryId, getPhotoById, getPhotosByPublisherId, addPhoto, updatePhoto, deletePhoto, addLike, deleteLike, uploadPhotoToCloudinary } = require('../controllers/photoController');

router.route('/').get(getAllPhotos);

router.route('/:id').get(getPhotoById);

router.route('/category/:id').get(getPhotosByCategoryId);

router.route('/publisher/:id').get(getPhotosByPublisherId);

router.route('/upload').post(uploadPhotoToCloudinary);

router.route('/').post(addPhoto);

router.route('/:id').put(updatePhoto);

router.route('/:id').delete(deletePhoto);

router.route('/likes/:id').put(addLike);

router.route('/likes/:id').delete(deleteLike);

module.exports = router;