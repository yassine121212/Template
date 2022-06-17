import { createContext, useState } from "react";
 
export const Context = createContext();

 
export const ContextProvider = ({ children }) => {
  const [countpanier, setcountpanier] = useState(0);

  return (
    <Context.Provider
      value={{
        countpanier: countpanier,
        setcountpanier:setcountpanier
    
      }}
    >
      {children}
    </Context.Provider>
  );
};



















