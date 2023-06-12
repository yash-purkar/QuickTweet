import { useReducer } from "react";
import { createContext } from "react";
import { dataInitialState, dataReducer } from "../Reducers/DataReducer";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitialState);

  const getAllPosts = async () => {
    try {
      const { status, data: { posts } } = await axios.get('/api/posts');

      if (status === 200 || status === 201) {
        dataDispatch({ type: "INITIALIZE_POSTS", payload: posts })
      }
    } catch (error) {
      console.log(error)
    }
  }


  const getAllUsers = async () => {
    try {
      const { status, data: { users } } = await axios.get('/api/users');
      if (status === 200 || status === 201) {
        dataDispatch({ type: "INITIALIZE_USERS", payload: users })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPosts()
    getAllUsers()
  }, []);



  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>{children}</DataContext.Provider>
  )
}


export const UseData = () => useContext(DataContext)