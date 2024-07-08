"use client";
const { createContext, useContext } = require("react");

const globalContext = createContext();

export default function GlobalProvider({ children }) {
  return <globalContext.Provider value={[]}>{children}</globalContext.Provider>;
}

export const useGlobal = useContext(globalContext);
