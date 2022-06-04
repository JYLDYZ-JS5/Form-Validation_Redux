const formData = {
  data: [],
}
let id=0
const reducerFunction = (state = formData, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        data: [
          ...state.data,
          {
            name: action.name,
            email: action.email,
            password: action.password,
            id:id++
          },
        ],
      }
    default:
      return state
  }
}
export default reducerFunction