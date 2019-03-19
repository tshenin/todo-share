import axios from 'axios';

const API_URL = 'http://194.87.95.58:1337/'

export const request = async (method, url, data) => {
    return await axios({
        method,
        url: `${API_URL}${url}`,
        data
    })
}
    


