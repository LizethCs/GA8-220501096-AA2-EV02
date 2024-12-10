import axios from 'axios';

const API_URL = 'http://localhost:8080/API/hotels';
const AUTH_TOKEN = 'Basic dXNlcjpwYXNzd29yZA==';

export const fetchHotels = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('No se pudieron obtener los datos de la API');
  }
};


