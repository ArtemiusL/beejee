const correctUser = 'admin';
const correctPass = '123';

export default (username, pass) => {
  if (
    username.toLowerCase().trim() === correctUser &&
    pass.toLowerCase().trim() === correctPass
  ) return true;
  return false;
};
