import React, { useState, createContext } from "react";

export const UnitContext = createContext("unit");

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState("imperial");

  const toggleUnit = (value) => setUnit(value);

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
};
