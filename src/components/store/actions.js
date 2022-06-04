export const submithandler = ({ name, email, password }) => ({
  type: 'SUBMIT',
  name: name,
  email: email,
  password: password,
})
