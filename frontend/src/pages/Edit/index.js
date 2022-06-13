import React from 'react';
import { Box, TextField, Typography, FormControl, Button, InputLabel, Select, MenuItem } from '@mui/material';

function Edit() {
    return (
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
                    sx={{ mx: { xs: 1, md: 5 }, my: 2 }}
                    label="Title"
                    type="text"
                    name='title'
                />
                <TextField
                    sx={{ mx: { xs: 1, md: 5 }, my: 2 }}
                    label="Description"
                    type="text"
                    name='description'
                />
                <FormControl sx={{ mx: { xs: 1, md: 5 }, my: 2 }}>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem  >Fashion</MenuItem>
                        <MenuItem value="trave" >Travel</MenuItem>
                        <MenuItem>Sports</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'center', mx: { xs: 1, md: 5 }, my: 2 }}>
                    <Button
                        sx={{ mt: 1 }}
                        variant="contained"
                        color="error"
                        type='submit'
                    >
                        Save
                    </Button>
                </Box>
                <Box sx={{ backgroundColor: '#e61605', height: '1rem', mt: 5 }}></Box>
            </Box>
        </Box>
    )
}

export default Edit;