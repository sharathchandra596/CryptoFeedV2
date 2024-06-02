/* eslint-disable react/prop-types */
import { createContext } from "react";

export const CoinContext = createContext()


const CoincontextProvider=(props)=>{

    const contextValue={

    }
    return(
        <CoinContext.Provider value={contextValue}>
            
            {props.children}
        </CoinContext.Provider>
    )

}



export default CoincontextProvider