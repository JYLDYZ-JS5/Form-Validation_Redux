import { useSelector } from 'react-redux'
import './login.css'
const Login = () => {
  const datas = useSelector((state) => state.data)
  return (
    <div className="loginCard">
      <h1>You are registrated!!!</h1>
      <ul>
        {datas.map((el) => (
          <div key={el.id}>
            <li>username: {el.name}</li>
            <li>email: {el.email}</li>
            <li>password: {el.password.split('').reverse().join('')}</li>
          </div>
        ))}
 
      </ul>
    </div>
  )
}
export default Login
