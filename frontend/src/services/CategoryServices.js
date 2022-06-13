import axios from 'axios';

export const getAllCategories = async () => {
    const { data } = await axios.get('http://localhost:4000/categories');
    return data;
}

export const getCategoryById = async (categoryId) => {
    const { data } = await axios.get(`http://localhost:4000/categories/${categoryId}`);
    return data;
}