import axios from 'axios';

const API_URL = 'http://194.87.95.58:1337/';

export const request = (method, url, data) => axios({
    method,
    url: `${API_URL}${url}`,
    data,
});
