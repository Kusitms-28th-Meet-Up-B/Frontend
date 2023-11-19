import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'https://tvmaker.shop'; // 서버 URL
Axios.defaults.withCredentials = true;

export default Axios;
