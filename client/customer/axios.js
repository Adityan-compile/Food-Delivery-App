import axios from 'axios';
import constants from './constants';

const instance = axios.create({});

instance.defaults.baseURL = constants.API_URL;

export default instance;
