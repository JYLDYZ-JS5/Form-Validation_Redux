import { useState } from 'react'

const useBlur = (value, validate) => {
  const [touched, setTouched] = useState(false)
  const isValid = validate(value)
  const onBlurValue = () => setTouched(true)
  const error = !isValid && touched
  return {
    onBlurValue:onBlurValue,
    isValid,
    error,
  }
}
export default useBlur
