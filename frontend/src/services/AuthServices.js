import axios from 'axios';

export const Signup = async (email, username, password) => {

    return await axios.post('http://localhost:4000/users/register', {
        email,
        username,
        password
    });
};

export const Login = async (email, password) => {

    return await axios.post('http://localhost:4000/users/login', {
        email,
        password
    });

};