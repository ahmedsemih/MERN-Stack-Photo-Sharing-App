import { useEffect, useState } from 'react'
import {getUser} from '../services/UserServices';

const useUserRole = (userId) => {

    const [role,setRole]=useState("basic");

    useEffect(()=>{
        getUser(userId)
        .then(res=>{
            setRole(res.user.role);
        })
    },[userId]);

  return [role]
}

export default useUserRole;