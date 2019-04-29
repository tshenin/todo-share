import axios from 'axios';
import { SecureStore } from 'expo';

const getApiUrl = () => {
    // if (releaseChannel === undefined) {
    // return 'http://localhost:1337/';
    // }
    // if (releaseChannel.contains('staging')) {
    return 'http://194.87.95.58:1337/';
    // }
    // if (releaseChannel.contains('prod')) {
    //     return 'http://194.87.95.58:1337/';
    // }
};

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
        url: `${getApiUrl()}${url}`,
        data,
        headers,
    });
};
