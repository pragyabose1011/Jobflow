export const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem("user", JSON.stringify(user))
  localStorage.setItem("token", token)
}


export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
}


export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user")
  return result ? JSON.parse(result) : null
}

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token")
}
