import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { PersonRemove, PersonAddAlt1 } from '@mui/icons-material';

import { getUser, followUser, unfollowUser } from '../../../services/UserServices';
import { useUserContext } from '../../../contexts/UserContext';

function Following({ following }) {

  const [fUser, setFUser] = useState("");
  const [isFollowed, setIsFollowed] = useState(true);

  const { user } = useUserContext();
  const navigate=useNavigate();

  useEffect(() => {
    if(following !== null){
      getUser(following.id).then(data => setFUser(data.user));
    }
  }, [following]);

  const onClickFollow = () => {
    followUser(user, following.id);
    setIsFollowed(true);
  };

  const onClickUnfollow = () => {
    unfollowUser(user, following.id);
    setIsFollowed(false);
  };

  if (following !== null) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2, px: { xs: 0, sm: 1, md: 2 }, borderBottom: 1, borderBottomColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            onClick={()=>navigate(`/profile/${following.id}`)}
            alt={fUser.username}
            src={fUser.imageUrl}
            sx={{ mr: 1, cursor:'pointer' }}
          />
          <Typography>{fUser.username}</Typography>
        </Box>
        {
          isFollowed ?
            <Button variant="contained" color="error" onClick={onClickUnfollow}>
              <PersonRemove />
            </Button>
            :
            <Button variant="contained" color="error" onClick={onClickFollow} >
              <PersonAddAlt1 />
            </Button>
        }
      </Box>
    )
  }
}

export default Following;