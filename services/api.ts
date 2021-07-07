import axios from 'axios';

export type userType = {
  firstName: string | null;
  lastName: string | null;
  cpf: string | null;
  cns: string | null;
  email: string | null;
  phone: string | null;
  motherName: string | null;
  gender: string | null;
  race: string | null;
};

export type addressType = {
  postalCode: string | null;
  state: string | null;
  city: string | null;
  neighborhood: string | null;
  streetName: string | null;
  streetNumber: string | null;
  complement: string | null;
};

export type DataType = {
  user: userType;
  address: addressType;
};

export const api = axios.create({
  baseURL: 'https://vacinas-app-mhanprpxzq-uc.a.run.app',
});

export const getUsers = () =>
  api
    .get('users')
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));

export const registerUser = (data: DataType) => {
  api
    .post('users/register/', data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};
