import { useContext } from "react";
import { useQuery } from "react-query";

import { PlaceContext } from "../contexts/PlaceContext";

export const useFiveDayWeather = () => {
  const { place } = useContext(PlaceContext);
  const queryString = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${place?.lat}&lon=${place?.lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

  const { isLoading, error, data } = useQuery(
    ["fiveDayWeather", place?.lat, place?.lng],
    () => fetch(queryString).then((res) => res.json()),
    {
      enabled: !!place,
    }
  );

  return { isLoading, error, data };
};
