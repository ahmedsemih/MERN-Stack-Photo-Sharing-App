import React from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material';

function UserArea({ user, currentUser }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Avatar
                    alt="Photography"
                    src={user.imageUrl}
                    sx={{ width: '20vh', height: '20vh', mx: 'auto' }}
                />
                <Typography variant="h5" sx={{ mt: 3, mx: 'auto', fontWeight: '800' }}>@{user.username}</Typography>
                <Typography sx={{ mt: 1, mx: 'auto', fontSize: '1.3rem', fontWeight: '300' }}>{user.email}</Typography>
                <Box sx={{ display: 'flex', mt: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ mr: 0, fontWeight: '700' }}>{user.followers} Followers</Typography>
                    {user._id === currentUser ? null : <Button variant='contained' color='error' sx={{ borderRadius: '25px',ml:2 }} >Follow</Button>}
                </Box>
            </Box>
        </Box>
    )
}

export default UserArea;