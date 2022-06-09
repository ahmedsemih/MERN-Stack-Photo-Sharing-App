import React, { useState } from 'react';
import { Box,ImageListItem,ImageListItemBar, IconButton  } from '@mui/material';
import {Favorite} from '@mui/icons-material';
import Header from './Components/Header';
import Masonry from '@mui/lab/Masonry';

function Home() {
  const [likeButton,setLikeButton]=useState(false);

  const onClickLike=()=>{
    setLikeButton(!likeButton);
  }

  return (
    <Box>
      <Header />
      <Box sx={{px:5,py:3, display:'flex', justifyContent:'center'}}>
        <Masonry columns={{xs:1,sm:2,md:3}} spacing={3} >
          <ImageListItem className='image-area'>
          <img alt="sdas" src="https://images.unsplash.com/photo-1654652601971-bea236ac42be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
          <ImageListItemBar 
          className='image-text' 
          sx={{p:3, display:'none' }} 
          title={'titlebalabla'} 
          subtitle={'@yulgh'} 
          actionIcon={
            <IconButton onClick={onClickLike} >
            <Favorite sx={{color: likeButton ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.54)'}} />
          </IconButton>
          } />
          </ImageListItem>
        </Masonry>
      </Box>
    </Box>
  )
}

export default Home;