import { createContext, useReducer , useEffect} from "react";

const initialState = {
    userId: null,
    username: "",
    isAuthorized: null
}

const GlobalState = createContext()


  




const GlobalStateProvider = (props) => {
    let localUserId = localStorage.getItem("userId")
    let localUsername = localStorage.getItem("username")

    const reducer = (state, action) => {
        switch(action.type){
        case "LOGIN":
            console.log("Reducer")
            let {username, id} = action.payload
            localStorage.setItem("userId", id)
            localStorage.setItem("username",username)
            return {...state, userId: id, username: username, isAuthorized:true}

        case "LOGOUT":
            localStorage.clear()
            return {...state, userId: null, username: null, isAuthorized:false}

        case "RETURNING USER":
                return {...state, userId: +localUserId, username: localUsername, isAuthorized:true}

        default:
            return state
        }
    }

    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        if(localUserId ){
            dispatch({type: "RETURNING USER"})
        }
console.log(localUserId, localUsername)
    },[])
    return(
        <GlobalState.Provider value={{state, dispatch}}>

            {props.children}
        </GlobalState.Provider>
    )
}

export default GlobalState

export {GlobalStateProvider}