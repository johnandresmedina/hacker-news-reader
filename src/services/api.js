import axios from 'axios';

const client = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const request = options => {
  const onSuccess = response => {
    return response.data;
  };

  const onError = error => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
