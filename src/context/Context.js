import { createContext, useEffect, useReducer } from "react";
import LoginReducer from "./Reducer";


const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = () => {
    const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    
    // console.log(dispatch);
    return(
        <Context.Provider value ={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
      </Context.Provider>
    )

}



