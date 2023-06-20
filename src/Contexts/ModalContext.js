import { useReducer } from "react";
import { createContext } from "react";
import { modalInitialState, modalReducer } from "../Reducers/ModalReducer";
import { useContext } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, modalInitialState);


  return (
    <ModalContext.Provider value={{ modalState, modalDispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

export const UseModal = () => useContext(ModalContext);