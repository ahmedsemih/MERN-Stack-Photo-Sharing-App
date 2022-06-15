import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import { getAllCategories } from '../../../services/CategoryServices';

function CategorySelector() {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then(data => setCategories(data.allCategories));
  }, [])

  return (
    <Box mt={4}>
      {
        categories.map((category, index) => {
          return <Button onClick={() => navigate(`/?category=${category._id}`)} key={index} sx={{ display: category.status ? 'inline' : 'none', color: 'black', borderRadius: '25px', backgroundColor: 'whitesmoke', m: 1 }} variant='error' >{category.name}</Button>
        })
      }
    </Box>
  )
}

export default CategorySelector;