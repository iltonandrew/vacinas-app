import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://vacinas-app-mhanprpxzq-uc.a.run.app',
});

export const getUsers = api
  .get('users')
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
