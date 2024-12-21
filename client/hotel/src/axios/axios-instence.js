import axios from 'axios';

const ax = axios.create({
   
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials:true

});

export default ax;