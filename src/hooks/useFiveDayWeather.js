import { useContext } from "react";
import { useQuery } from "react-query";

import { PlaceContext } from "../contexts/PlaceContext";
import { UnitContext } from "../contexts/unitContext";

const MAX_DAYS = 5;

export const useFiveDayWeather = () => {
  const { place } = useContext(PlaceContext);
  const { unit } = useContext(UnitContext);

  const queryString = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${place?.lat}&lon=${place?.lng}&cnt=${MAX_DAYS}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

  const { isLoading, error, data } = useQuery(
    ["fiveDayWeather", place?.lat, place?.lng, unit],
    () => fetch(queryString).then((res) => res.json()),
    {
      enabled: !!place,
    }
  );

  return { isLoading, error, data };
};
