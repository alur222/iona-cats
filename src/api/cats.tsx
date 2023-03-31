import axios from 'axios';

const key = import.meta.env.VITE_CATS_API_KEY;

const baseUrl = 'https://api.thecatapi.com/v1';

export const getAllBreeds = async () => {
  const { data } = await axios.request({
    url: `${baseUrl}/breeds`,
    headers: {
      'x-api-key': key,
    },
  });
  return data;
};

export const getBreed = async () => {};
