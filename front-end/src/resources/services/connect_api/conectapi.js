import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:1337/api",

    headers: {

    "Content-type": "application/json",
    },
});

export default API;
