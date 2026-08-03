"use client"
import { createContext, useContext, ReactNode } from "react";

interface UserContextType {
  userId: string;
  userName: string;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children, value }: { children: ReactNode; value: UserContextType }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser debe usarse dentro de UserProvider");
  return context;
}