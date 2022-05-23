import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';
import axiosPrivate from '../Pages/Api/axiosPrivate';

const UserInformation = () => {
    const [user] = useAuthState(auth)
    const [users,setUser] = useState({})
    useEffect(()=>{
       try {
        axiosPrivate.get(`/users/${user?.email}`)
        .then(response =>{
            setUser(response.data)
        })
       } catch (error) {
           if(error.response.status === 403 || error.response.status){
               signOut(auth)
               Navigate("/")
               localStorage.removeItem("userToken")
           }
       }
    },[user])
    return [users]
};

export default UserInformation;