import { User } from "../types/User";
import { Error } from "../types/Error";


export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatório";
  }

  if (!data.email) {
    errors["email"] = "O email é obrigatório";
  }

  if (!data.agree) {
    errors["agree"] = "É necessário concordar com os termos";
  }

  return errors;
};
