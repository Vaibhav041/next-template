"use client";
import { useState } from "react";
import { createContext } from "react";

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState("Desktop");

  const setData = (val) => {
    setView(val);
  };

  return (
    <ViewContext.Provider value={{ view, setData }}>
      {children}
    </ViewContext.Provider>
  );
};
