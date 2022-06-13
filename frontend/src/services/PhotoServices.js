import axios from 'axios';

export const getPhotosByUserId = async (userId) => {
    const { data } = await axios.get(`http://localhost:4000/photos/?publisher=${userId}`);
    return data;
};

export const addLike = (photoId) => {
    axios.put(`http://localhost:4000/photos/likes/${photoId}`);
};

export const removeLike = (photoId) => {
    axios.delete(`http://localhost:4000/photos/likes/${photoId}`);
}