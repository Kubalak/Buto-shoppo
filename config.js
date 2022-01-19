import axios from "axios";
import {API_HOST,API_URL,APP_TOKEN} from "@env";

axios.defaults.baseURL = `http://${API_HOST}/${API_URL}`;
axios.defaults.headers.common['Authorization'] = `Basic ${APP_TOKEN}`;

export default function createInstance()
{
    return axios.create();
}