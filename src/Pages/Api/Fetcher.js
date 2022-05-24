import axios from 'axios';

const Fetcher = axios.create({
    baseURL:"https://young-fortress-41278.herokuapp.com"
})

export default Fetcher;