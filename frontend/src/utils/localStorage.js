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
  if (result) {
    try {
      return JSON.parse(result)
    } catch (error) {
      // If parsing fails, clear the invalid data and return null
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      return null
    }
  }
  return null
}

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token")
}
