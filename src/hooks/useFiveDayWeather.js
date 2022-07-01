import { useContext } from "react";
import { useQuery } from "react-query";

import { PlaceContext } from "../contexts/PlaceContext";
import { UnitContext } from "../contexts/unitContext";

// 6 because the first day includes today, which will be already displayed, so we'll use the last 5 in the payload
const MAX_DAYS = 6;

export const useFiveDayWeather = () => {
  const { place } = useContext(PlaceContext);
  const { unit } = useContext(UnitContext);

  const queryString = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${place?.lat}&lon=${place?.lng}&cnt=${MAX_DAYS}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

  const { isLoading, error, data } = useQuery(
    ["fiveDayWeather", place?.result, unit],
    () => fetch(queryString).then((res) => res.json()),
    {
      enabled: !!place,
    }
  );

  if (data && data.list.length > 5) {
    // destructure out 'today' and use the next 5 days
    const [today, ...nextFiveDays] = data.list;

    data.list = [...nextFiveDays];
  }

  return { isLoading, error, data };
};
