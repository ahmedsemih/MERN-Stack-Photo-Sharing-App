import axios from 'axios';

export const getUser = async (userId) => {
    const { data } = await axios.get(`http://localhost:4000/users/${userId}`);
    return data;
};

export const followUser = (followerId, followedId) => {
    axios.post('http://localhost:4000/users/followers', {
        followerId,
        followedId
    });
};

export const unfollowUser = (followerId, followedId) => {
    axios.delete('http://localhost:4000/users/followers', {
        followerId,
        followedId
    });
};