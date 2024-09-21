import { createContext, useState } from "react";


const EmpContext = createContext()
function UserProvider(props){
    const [addResponse,setAddResponse]= useState("")

    return(
        <div>
            <EmpContext.Provider value={{addResponse,setAddResponse}}>
                {props.children}
            </EmpContext.Provider>
        </div>
    )
}
export {EmpContext,UserProvider}

