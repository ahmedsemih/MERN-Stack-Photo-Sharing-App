import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, TextField, Typography, FormControl, Button, InputLabel, Select, MenuItem, Snackbar, Alert } from '@mui/material';

import { getPhotoById, updatePhoto } from '../../services/PhotoServices';
import { getAllCategories, getCategoryById } from '../../services/CategoryServices';

function Edit() {

    const location = useLocation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [allCategories, setAllCategories] = useState([]);
    const [openAlert, setOpenAlert] = useState(false);
    const [result, setResult] = useState("");

    useEffect(() => {
        getPhotoById(location.state.photoId).then(data => {
            setTitle(data.photo.title);
            setDescription(data.photo.description);
            getCategoryById(data.photo.category).then(c => setCategory(c.category._id));
        });
        getAllCategories().then(data => setAllCategories(data.allCategories));
    }, [location]);

    const onSubmit = (e) => {
        updatePhoto(location.state.photoId, title, description, category).then(data => setResult(data));
        setOpenAlert(true);
        e.preventDefault();
    }

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh'
                }}>
                <Box
                    component='form'
                    sx={{
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: { xs: '100vw', sm: '70vw', md: '50vw', lg: '30vw' }
                    }}>
                    <Box
                        sx={{
                            backgroundColor: '#e61605',
                            height: '1rem', mb: 5
                        }}></Box>
                    <Typography variant='h2' sx={{ m: 1, textAlign: 'center' }}>Edit Photo</Typography>
                    <TextField
                        onInput={(e) => setTitle(e.target.value)}
                        sx={{ mx: { xs: 1, md: 5 }, my: 2 }}
                        label="Title"
                        type="text"
                        name='title'
                        value={title}
                    />
                    <TextField
                        onInput={(e) => setDescription(e.target.value)}
                        sx={{ mx: { xs: 1, md: 5 }, my: 2 }}
                        label="Description"
                        type="text"
                        name='description'
                        value={description}
                    />
                    <FormControl sx={{ mx: { xs: 1, md: 5 }, my: 2 }}>
                        <InputLabel>Category</InputLabel>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                            {
                                allCategories.map((c, index) => {
                                    return <MenuItem key={index} value={c._id} >{c.name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mx: { xs: 1, md: 5 }, my: 2 }}>
                        <Button
                            sx={{ mt: 1 }}
                            variant="contained"
                            color="error"
                            type='submit'
                            onClick={onSubmit}
                        >
                            Save
                        </Button>
                    </Box>
                    <Box sx={{ backgroundColor: '#e61605', height: '1rem', mt: 5 }}></Box>
                </Box>
            </Box>

            {/* Alert */}
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={() => setOpenAlert(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >
                <Alert severity={result !== null && result.status === 'failed' ? 'error' : 'success'} onClose={() => setOpenAlert(false)}>
                    {result !== null && result.status === 'success' ? 'Successfully saved.' : 'Somethings went wrong.'}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Edit;