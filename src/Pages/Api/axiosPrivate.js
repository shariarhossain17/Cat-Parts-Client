import axios from "axios";

const axiosPrivate = axios.create({
    baseURL:"https://young-fortress-41278.herokuapp.com"
})

axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem("userToken")}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    
    return Promise.reject(error);
  });

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axiosPrivate