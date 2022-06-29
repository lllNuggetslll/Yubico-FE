import { useContext } from "react";
import { useQuery } from "react-query";

import { PlaceContext } from "../contexts/PlaceContext";

export const useAirPollution = () => {
  const { place } = useContext(PlaceContext);
  const queryString = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${place?.lat}&lon=${place?.lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

  const { isLoading, error, data } = useQuery(
    ["airPollution", place?.lat, place?.lng],
    () => fetch(queryString).then((res) => res.json()),
    { enabled: !!place }
  );

  return { isLoading, error, data };
};
