import axios from "axios";
import { API_Url } from "./api";
import getCookie from "../helper/cookie/getCookiesAsObject";


const AXIOS = axios.create({
  baseURL: API_Url,
});

// Add a request interceptor
AXIOS.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getCookie('accessToken');
    if (accessToken)
    {
      config.headers.Authorization = `Bearer ${accessToken}`;
      console.log(config);
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
AXIOS.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default AXIOS;