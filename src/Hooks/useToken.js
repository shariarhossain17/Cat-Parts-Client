import { useEffect, useState } from "react";
import Fetcher from "../Pages/Api/Fetcher";

const useToken = user =>{
    const [token,setToken] = useState("")
    useEffect(()=>{
        const email = user?.email
        const currentUser = {email:email}
        if(email){
            Fetcher.put(`users/${email}`,currentUser)
            .then(response => {
                const accessToken = response.data.token;
                localStorage.setItem("userToken",accessToken)
                setToken(accessToken)
            })
        }
    },[user])
    return [token]
}

export default useToken