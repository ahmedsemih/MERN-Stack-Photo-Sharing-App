import React from 'react';
import {Box, Button} from '@mui/material';

function CategorySelector() {
  return (
    <Box mt={4}>
        <Button sx={{color:'black', borderRadius:'25px', backgroundColor:'whitesmoke', m:1}} variant='error' >Fashion</Button>
        <Button sx={{color:'black', borderRadius:'25px', backgroundColor:'whitesmoke', m:1}} variant='error' >Sports</Button>
        <Button sx={{color:'black', borderRadius:'25px', backgroundColor:'whitesmoke', m:1}} variant='error' >Art</Button>
        <Button sx={{color:'black', borderRadius:'25px', backgroundColor:'whitesmoke', m:1}} variant='error' >Architecture</Button>
        <Button sx={{color:'black', borderRadius:'25px', backgroundColor:'whitesmoke', m:1}} variant='error' >Technology</Button>
        <Button sx={{color:'black', borderRadius:'25px', backgroundColor:'whitesmoke', m:1}} variant='error' >Travel</Button>
        <Button sx={{color:'black', borderRadius:'25px', backgroundColor:'whitesmoke', m:1}} variant='error' >Flight</Button>
    </Box>
  )
}

export default CategorySelector