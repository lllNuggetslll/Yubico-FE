import React, { useState, createContext } from "react";

export const PlaceContext = createContext(null);

export const PlaceProvider = ({ children }) => {
  const [place, setPlace] = useState(null);

  const selectPlace = (selectedPlace) => setPlace(selectedPlace);

  return (
    <PlaceContext.Provider value={{ place, selectPlace }}>
      {children}
    </PlaceContext.Provider>
  );
};
