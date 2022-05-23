import { useEffect, useState } from 'react';
import axiosPrivate from '../Pages/Api/axiosPrivate';

const UseAdmin = (user) => {
    const [admin,setAdmin] = useState(false)
    const [adminLoading,setAdminLoading] = useState(true)
    const email = user?.email;
    useEffect(()=>{
        if(email){
           axiosPrivate.get(`admin/${email}`)
           .then(response => {
               console.log(response.data);
               setAdmin(response.data)
               setAdminLoading(false)
           })
         
        }
    },[user])
    return [admin,adminLoading]

};

export default UseAdmin;