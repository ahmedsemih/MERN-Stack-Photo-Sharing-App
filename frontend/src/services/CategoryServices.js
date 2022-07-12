import axios from 'axios';

export const getAllCategories = async () => {
    const { data } = await axios.get('http://localhost:4000/categories');
    return data;
};

export const getCategoryById = async (categoryId) => {
    const { data } = await axios.get(`http://localhost:4000/categories/${categoryId}`);
    return data;
};

export const createCategory = async (name, status) => {
    const { data } = await axios.post('http://localhost:4000/categories', {
        name,
        status
    })
    return data;
};

export const updateCategoryById = async (categoryId, name, status) => {
    const { data } = await axios.put(`http://localhost:4000/categories/${categoryId}`, {
        name,
        status
    });
    return data;
};

export const deleteCategoryById = async (categoryId) => {
    const { data } = await axios.delete(`http://localhost:4000/categories/${categoryId}`);
    return data;
};