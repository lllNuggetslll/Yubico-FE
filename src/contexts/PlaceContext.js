import React, { useState, createContext } from "react";

export const PlaceContext = createContext(null);

export const PlaceProvider = ({ children }) => {
  const [place, setPlace] = useState({
    result: "Mountain View, California, United States",
    lat: 37.3861,
    lng: -122.0839,
  });

  const getLocalPlace = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      selectPlace({
        result: "Local",
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  const selectPlace = (selectedPlace) => setPlace(selectedPlace);

  return (
    <PlaceContext.Provider value={{ place, selectPlace, getLocalPlace }}>
      {children}
    </PlaceContext.Provider>
  );
};
