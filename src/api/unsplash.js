import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers : { Authorization: 'Client-ID uHbL7a_ZWe0jkK8oai_-KoDyLIY5DTWzLKoEbdNjhXA'}
});