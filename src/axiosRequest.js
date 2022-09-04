import axios from 'axios';

const params = {
    key: '29676821-2dfd501c3768e552959bc01fb',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
};

export default class AxiosRequestService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async getImage() {
        try {
            const url = `https://pixabay.com/api/?q=${this.searchQuery}&page=${this.page}`;

            const response = await axios.get(url, { params });

            await this.incrementPage();
            return response.data;
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    }

    async incrementPage() {
        this.page += 1;
    }

    async resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}