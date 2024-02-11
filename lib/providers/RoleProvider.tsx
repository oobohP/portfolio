import { createContext, useState } from "react";

type RoleContextType = {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
};

export const RoleContext = createContext<RoleContextType>({
  role: "full-stack",
  setRole: () => {},
});

type RoleContextProviderProps = {
  children: React.ReactNode;
};

const RoleContextProvider: React.FC<RoleContextProviderProps> = ({ children }) => {
  const [role, setRole] = useState("full-stack");

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
      }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleContextProvider;
