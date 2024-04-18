import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

export const comparePasswords = async (loginPassword, dbPassword) => {
  const result = await bcrypt.compare(loginPassword, dbPassword);

  return result;
};

export default { hashPassword, comparePasswords };
