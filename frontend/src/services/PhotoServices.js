import axios from 'axios';

export const getAllPhotos = async () => {
    const { data } = await axios.get('http://localhost:4000/photos');
    return data;
}

export const getPhotosByUserId = async (userId) => {
    const { data } = await axios.get(`http://localhost:4000/photos/publisher/${userId}`);
    return data;
};

export const getPhotosByCategoryId = async (categoryId) => {
    const { data } = await axios.get(`http://localhost:4000/photos/category/${categoryId}`);
    return data;
}

export const getPhotoById = async (photoId) => {
    const { data } = await axios.get(`http://localhost:4000/photos/${photoId}`);
    return data;
};

export const addPhoto = async (imageUrl, title, description, category, publisher, publisherName) => {
    const { data } = await axios.post('http://localhost:4000/photos/', {
        imageUrl,
        title,
        description,
        category,
        publisher,
        publisherName
    });
    return data;
};

export const uploadPhotoToCloudinary = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "yop7c76h");
    data.append("cloud_name", "dcm29mbom");
    const result = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: data
    })
        .then(res => res.json());
    return result;
};

export const updatePhoto = async (photoId, title, description, category) => {
    const { data } = await axios.put(`http://localhost:4000/photos/${photoId}`, {
        title,
        description,
        category
    });
    return data;
};

export const deletePhoto = async (photoId) => {
    const { data } = await axios.delete(`http://localhost:4000/photos/${photoId}`);
    return data;
}

// LIKE SYSTEM

export const addLike = (photoId,likerId) => {

    axios.put(`http://localhost:4000/photos/${photoId}/likes/${likerId}`,{
        liker:likerId
    });
};

export const removeLike = (photoId,likerId) => {
    const id=likerId
    axios.delete(`http://localhost:4000/photos/${photoId}/likes/${likerId}`,{
        liker:id
    });
}