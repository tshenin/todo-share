import axios from 'axios';
import { SecureStore } from 'expo';

const API_URL = 'http://194.87.95.58:1337/';

export const request = async (method, url, data, open) => {
    let headers = {};
    if (!open) {
        const token = await SecureStore.getItemAsync('token');
        headers = {
            Authorization: `bearer ${token}`,
        };
    }

    return axios({
        method,
        url: `${API_URL}${url}`,
        data,
        headers,
    });
};
