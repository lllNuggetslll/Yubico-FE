import { useContext } from "react";
import { useQuery } from "react-query";

import { PlaceContext } from "../contexts/PlaceContext";
import { UnitContext } from "../contexts/unitContext";

export const useWeather = () => {
  const { place } = useContext(PlaceContext);
  const { unit } = useContext(UnitContext);
  const queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${place?.lat}&lon=${place?.lng}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

  const { isLoading, error, data } = useQuery(
    ["todaysWeather", place?.lat, place?.lng, unit],
    () => fetch(queryString).then((res) => res.json()),
    {
      enabled: !!place,
    }
  );

  return { isLoading, error, data };
};
