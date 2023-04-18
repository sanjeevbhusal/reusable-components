import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setCurrentPath(window.location.pathname);
    });
  }, []);

  const navigate = (to) => {
    window.history.pushState(null, "", to);
    setCurrentPath(to);
  };

  const valuesToShare = {
    currentPath,
    setCurrentPath,
    navigate,
  };

  return (
    <NavigationContext.Provider value={valuesToShare}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationContext };
export default NavigationProvider;
