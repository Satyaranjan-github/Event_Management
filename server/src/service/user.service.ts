import { User } from "../model/user.model";
import { IUser } from "../types/user";

export const createUser = async (userData: IUser) => {
  console.log("User data received in service:", userData);
  await User.create(userData);
};
