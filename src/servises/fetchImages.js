import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21324182-6e2c174a97ce868f915b55e22';



const fetchImagesByQuery = (searchQuery, page) => {
    const searchParams = new URLSearchParams({
        image_type: 'photo',
        orientation: 'horizontal',
        q: searchQuery,
        page: page,
        per_page: 12,
        key: API_KEY,
    });
    return axios.get(`${BASE_URL}?${searchParams}`);
};

export default fetchImagesByQuery;
