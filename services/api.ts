import axios from "axios";

export type userType = {
  firstName?: string;
  lastName?: string;
  cpf?: string;
  cns?: string;
  email?: string;
  phone?: string;
  motherName?: string;
  gender?: string;
  race?: string;
};

export type addressType = {
  postalCode?: string;
  state?: string;
  city?: string;
  neighborhood?: string;
  streetName?: string;
  streetNumber?: string;
  complement?: string;
};

export type addressReturnType = {
  postalCode: string;
  state: string;
  city: string;
  neighborhood: string;
  streetName: string;
};

export type DataType = {
  user: userType;
  address: addressType;
};

export const api = axios.create({
  baseURL: "https://vacinas-app-mhanprpxzq-uc.a.run.app",
});

export const getUsers = () =>
  api
    .get("users")
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));

export const registerUser = (data: DataType) => {
  api
    .post("users/register/", data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

export const getAddressFromPostalCode = async (
  postalCode: string
): Promise<addressReturnType | undefined> => {
  try {
    const response = await api.patch<addressReturnType>("address/postal-code", {
      postalCode,
    });
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};
