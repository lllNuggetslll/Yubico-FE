import { useContext } from "react";
import { useQuery } from "react-query";

import { PlaceContext } from "../contexts/PlaceContext";

export const useWeather = () => {
  const { place } = useContext(PlaceContext);
  const queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${place?.lat}&lon=${place?.lng}&appid=${process.env.REACT_APP_MAPBOX_API_KEY}`;

  const { isLoading, error, data } = useQuery(
    ["todaysWeather", place?.lat, place?.lng],
    () => fetch(queryString).then((res) => res.json()),
    {
      enabled: !!place,
    }
  );

  return { isLoading, error, data };
};
