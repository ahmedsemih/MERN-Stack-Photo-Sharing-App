import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import { Favorite, Edit } from '@mui/icons-material';

import { useUserContext } from '../contexts/UserContext';
import { addLike, removeLike } from '../services/PhotoServices';

function Image({ imageUrl, title, publisher, publisherName, id }) {

  const [likeButton, setLikeButton] = useState(false);
  const { user } = useUserContext();
  const navigate = useNavigate();

  const onClickLike = () => {
    setLikeButton(!likeButton);
    if (likeButton) {
      removeLike(id);
    } else {
      addLike(id);
    }
  }

  const onClickEdit = () => {
    navigate('/edit', { state: { photoId: id } });
  }

  return (
    <ImageListItem className='image-area'>
      <img onClick={()=>navigate(`/photo/${id}`)} alt={title} src={imageUrl} />
      <ImageListItemBar
        className='image-text'
        sx={{ p: 2, display: 'none' }}
        title={title}
        subtitle={`@${publisherName}`}
        actionIcon={
          publisher === user ?
            <IconButton onClick={onClickEdit}>
              <Edit sx={{ color: 'rgba(255, 255, 255, 1)' }} />
            </IconButton>
            :
            <IconButton onClick={onClickLike} >
              <Favorite sx={{ color: likeButton ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.54)' }} />
            </IconButton>
        } />
    </ImageListItem>
  )
}

export default Image