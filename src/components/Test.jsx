import { createContext } from "react";


export const AppContext = createContext();

// eslint-disable-next-line no-unused-vars
const Contextprovider = (props) => {

  const contextValue={
    name:"sharath"
  }
  return(
    <AppContext.Provider value={contextValue}>

    </AppContext.Provider>
  )
  
};

export default Contextprovider;
