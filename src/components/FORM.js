import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './form.css'
import Login from './login/Login'
import useBlur from './onBlur'
import { submithandler } from './store/actions'

function Form() {
  const [login, setLogin] = useState(false)
  const [form, setForm] = useState(true)
  const pass = useRef()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const inputChangeHandler = (e) => {
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value,
    })
  }

  const validate = (value) => value.trim() !== ''
  const {
    onBlurValue: blurName,
    isValid: validateName,
    error: validName,
  } = useBlur(data.name, validate)
  const className = validName ? 'uncorrect' : ''

  const validateemail = (value) => value.includes('@')
  const {
    onBlurValue: blurEmail,
    isValid: validateEmail,
    error: validEmail,
  } = useBlur(data.email, validateemail)
  const classEmail = validEmail ? 'uncorrect' : ''

  const validatepassword = (value) => value.length >= 5
  const {
    onBlurValue: blurPassword,
    isValid: validatePassword,
    error: validPassword,
  } = useBlur(data.password, validatepassword)
  const classPassword = validPassword ? 'uncorrect' : ''

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(submithandler(data))
    if (validateName && validateEmail && validatePassword) {
      setLogin(true)
      setForm(false)
    }
  }
  let formIsValid = false
  if (validateName && validateEmail && validatePassword) formIsValid = true

  return (
    <>
      {login && <Login />}
      {form && (
        <form className="form-style-7" onSubmit={submitHandler}>
          <ul>
            <li>
              <label htmlFor="name">Username</label>
              <input
                className={className}
                value={data.name}
                type="text"
                name="name"
                onChange={inputChangeHandler}
                onBlur={blurName}
              />
              <span>Enter your user name here</span>
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                className={classEmail}
                value={data.email}
                type="text"
                name="email"
                onChange={inputChangeHandler}
                onBlur={blurEmail}
                placeholder={
                  validEmail ? 'Please try again , enter a valid email' : ''
                }
              />
              <span>Enter a valid email address</span>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                className={classPassword}
                value={data.password}
                type="text"
                name="password"
                onChange={inputChangeHandler}
                onBlur={blurPassword}
                ref={pass}
              />
              <span>Your password</span>
            </li>
            <li>
              <button disabled={!formIsValid} className="submit" type="submit">
                Sign Up
              </button>
            </li>
          </ul>
        </form>
      )}
    </>
  )
}
export default Form
