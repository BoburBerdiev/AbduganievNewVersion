import axios from "axios";
axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/v1`;

export default axios;