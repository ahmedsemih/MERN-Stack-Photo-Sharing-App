import React, {useState} from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { PhotoLibrary, Group } from '@mui/icons-material';

import UserArea from './Components/UserArea';
import UserTab from './Components/UserTab';
import PhotoTab from './Components/PhotoTab';

function Profile() {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <UserArea />
            <Box sx={{ width: '100%', typography: 'body1',px:'5vw' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'center', color:'black' }}>
                        <TabList onChange={handleChange} textColor='inherit' indicatorColor='inherit' >
                            <Tab icon={<PhotoLibrary/>} label="Photo" value="1" />
                            <Tab icon={<Group/>} label="Followings" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel sx={{p:0}} value="1"><PhotoTab/></TabPanel>
                    <TabPanel sx={{p:0}} value="2"><UserTab/></TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Profile;