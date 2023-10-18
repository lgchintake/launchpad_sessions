import bcrypt from "bcrypt";
const saltRounds = 10;

export const encryptPassword = async (plainPassword) => {
  return bcrypt.hashSync(plainPassword, saltRounds);
};

export const checkPassword = async (plainPassword, encryptedPassword) => {
  return bcrypt.compareSync(plainPassword, encryptedPassword);
};
