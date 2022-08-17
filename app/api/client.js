import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create ({
    baseURL: 'http://192.168.1.21:9000/api'
})

const get = apiClient.get;
apiClient.get = () => {
    // Before
    get();
    // After
}

export default apiClient;