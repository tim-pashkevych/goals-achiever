import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

export const comparePasswords = async (loginPassword: string, dbPassword: string) => {
  const result = await bcrypt.compare(loginPassword, dbPassword);

  return result;
};

export default { hashPassword, comparePasswords };
