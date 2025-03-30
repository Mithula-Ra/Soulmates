import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FirstLoginContextType {
  isFirstLogin: boolean;
  setFirstLogin: (isFirstLogin: boolean) => void;
}

const FirstLoginContext = createContext<FirstLoginContextType | undefined>(undefined);

// Create the provider component
export const FirstLoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFirstLogin, setIsFirstLogin] = useState<boolean>(false);

  useEffect(() => {
    // const checkFirstLogin = localStorage.getItem('firstLogin');
    
    // if (checkFirstLogin === null) {
    //   localStorage.setItem('firstLogin', 'false');
    //   setIsFirstLogin(true);
    // }
    setIsFirstLogin(true);
  }, []);

  return (
    <FirstLoginContext.Provider value={{ isFirstLogin, setFirstLogin: (status) => localStorage.setItem('firstLogin', String(status)) }}>
      {children}
    </FirstLoginContext.Provider>
  );
};

// Custom hook to access the context
export const useFirstLogin = (): FirstLoginContextType => {
  const context = useContext(FirstLoginContext);
  if (!context) {
    throw new Error('useFirstLogin must be used within a FirstLoginProvider');
  }
  return context;
};
