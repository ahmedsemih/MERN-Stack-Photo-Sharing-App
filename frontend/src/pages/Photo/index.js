import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, CardMedia, CardContent, IconButton, CardHeader, Avatar, Typography, CardActions, Snackbar, Alert } from '@mui/material';
import { PersonAddAlt1, Favorite, Edit } from '@mui/icons-material';
import moment from 'moment';

import { getPhotoById, addLike, removeLike } from '../../services/PhotoServices';
import { getUser, followUser, unfollowUser } from '../../services/UserServices';
import { useUserContext } from '../../contexts/UserContext';
import useFollowStatus from '../../hooks/useFollowStatus';

function Photo() {
  const [photo, setPhoto] = useState("");
  const [publisher, setPublisher] = useState("");
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);
  const [isOpenFollow, setIsOpenFollow] = useState(false);
  const [isOpenLike, setIsOpenLike] = useState(false);

  const { user } = useUserContext();
  const { id } = useParams();
  const [status]=useFollowStatus(user,photo.publisher);
  const navigate = useNavigate();

  useEffect(() => {
    getPhotoById(id).then(data => setPhoto(data.photo));
    getUser(photo.publisher).then(data => setPublisher(data.user));
    if(user !== undefined && user !== null && photo.publisher !== undefined && photo.publisher !== null){
      setFollow(status);
    } 
  }, [id, photo.publisher, photo.likes, user,status]);

  const onClickAvatar = () => {
    navigate(`/profile/${photo.publisher}`);
  };

  const onClickLike = () => {
    if (user !== photo.publisher) {
      if (like) {
        removeLike(id);
        setLike(false);
      } else {
        addLike(id);
        setLike(true);
      }
    }
    else {
      setIsOpenLike(true);
    }
  };

  const onClickFollow = () => {
    if (user !== photo.publisher) {
      if (follow) {
        unfollowUser(user, photo.publisher)
        setFollow(false);
      } else {
        followUser(user, photo.publisher);
        setFollow(true);
      }
    }
    else {
      setIsOpenFollow(true);
    }
  };

  const onClickEdit = () => {
    navigate('/edit', { state: { photoId: id } });
  };

  return (
    <Box sx={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ boxShadow: { md: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }, p: 2, mt: '10vh' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ cursor: 'pointer' }} onClick={onClickAvatar} src={publisher.imageUrl} />
          }
          title={photo.publisherName}
          subheader={moment(photo.publishedAt).format('DD/MM/YYYY -  hh:mm A')}
        />
        <CardMedia
          sx={{ maxHeight: { xs: 300, sm: 500 } }}
          component="img"
          height="auto"
          image={photo.imageUrl}
          alt={photo.title}
        />
        <CardContent>
          <Typography variant='h6' >{photo.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {photo.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={onClickLike} sx={{ color: like ? 'rgba(20, 20, 20, 1)' : 'rgba(20, 20, 20, 0.4)' }} >
            <Favorite />
          </IconButton>
          <Typography color="text.secondary">{photo.likes}</Typography>
          <IconButton sx={{ ml: 3, color: follow ? 'rgba(20, 20, 20, 1)' : 'rgba(20, 20, 20, 0.4)' }}>
            <PersonAddAlt1 onClick={onClickFollow} />
          </IconButton>
          <Typography color="text.secondary">{publisher.followers}</Typography>
          {
            user === publisher._id
            &&
            <IconButton sx={{ ml: 'auto', color: 'rgba(20, 20, 20, 1)' }}>
              <Edit onClick={onClickEdit} />
            </IconButton>
          }
        </CardActions>
      </Card>

      {/* Alerts */}
      <Snackbar open={isOpenFollow} autoHideDuration={3000} onClose={() => setIsOpenFollow(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >
        <Alert severity={'error'} onClose={() => setIsOpenFollow(false)}>
          You can't follow your own account !
        </Alert>
      </Snackbar>

      <Snackbar open={isOpenLike} autoHideDuration={3000} onClose={() => setIsOpenLike(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >
        <Alert severity={'error'} onClose={() => setIsOpenLike(false)}>
          You can't like your own photos !
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Photo;