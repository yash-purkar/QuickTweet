import { useReducer } from "react";
import { createContext } from "react";
import { postInitialState, postReducer } from "../Reducers/PostReducer";
import { useContext } from "react";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);


  return (
    <PostContext.Provider value={{ postState, postDispatch }}>
      {children}
    </PostContext.Provider>
  )
}

export const UsePost = () => useContext(PostContext);