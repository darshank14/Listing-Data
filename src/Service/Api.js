import axios from 'axios';

import {
  BASE_URL,
} from './ApiEndPoint';



const Api = axios.create({
  baseURL: BASE_URL,
});

Api.interceptors.request.use(req => {
  console.log(req.baseURL + req.url);
 
  req.headers['Content-Type'] = 'multipart/form-data';
 
  return req;
});


Api.interceptors.response.use(
  async response => {
    // console.log("api res:-"+response.data?.message);


    if (response.data.status === 'RC300') {
    console.log(response.data)
    }

    if (response?.data?.status === 'RC200') {
      return response?.data;
    }

    if (response.data.status === 'RC100') {
        console.log("rc100")
      return false;
    }

    if (response.data.status === 'RC400') {
      console.log("rc400")
    } else {
     
      
      return response?.data;
    }
  },
  error => {
    console.log(error);
    return '';
  },
);

export default Api;

