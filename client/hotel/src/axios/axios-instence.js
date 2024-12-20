import axios from 'axios';

const ax = axios.create({
    baseURL: 'http://localhost:8845/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },

});

export default ax;