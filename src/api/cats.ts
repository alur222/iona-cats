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

interface Params {
  page: number;
  limit: number;
  breed_id: string;
}

export const searchCats = async (params: Params) => {
  const { data } = await axios.request({
    url: `${baseUrl}/images/search`,
    params,
    headers: {
      'x-api-key': key,
    },
  });
  return data;
};

interface GetParams {
  id: string;
}

export const getCatById = async ({ id }: GetParams) => {
  const { data } = await axios.request({
    url: `${baseUrl}/images/${id}`,
    headers: {
      'x-api-key': key,
    },
  });
  return data;
};
