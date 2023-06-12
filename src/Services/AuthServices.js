import axios from "axios"

export const LoginUser = async (creds, setIsLoggedIn, prevLocation, navigate) => {
  try {
    const { status, data: { encodedToken, foundUser } } = await axios.post('/api/auth/login', {
      ...creds
    });

    // console.log(encodedToken, foundUser)
    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(foundUser))
      setIsLoggedIn(true)
      if (prevLocation) {
        navigate(prevLocation)
      }
      else {
        navigate("/")
      }
    }


  } catch (error) {
    console.log(error)
  }
}

export const SignupUser = async (creds, setIsLoggedIn, navigate) => {
  try {
    const { status, data: { encodedToken, createdUser } } = await axios.post('/api/auth/signup', {
      ...creds
    })

    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(createdUser));
      setIsLoggedIn(true);
      navigate("/")
    }
  } catch (error) {
    console.log(error)
  }
}