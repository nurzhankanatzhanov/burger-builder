import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-burger-61040.firebaseio.com/'
});

export default instance;