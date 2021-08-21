import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clonee-back-end.herokuapp.com/'
});

export default instance;