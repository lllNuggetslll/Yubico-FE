import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import { useFiveDayWeather } from "./../../hooks/useFiveDayWeather";

export const FiveDayWeather = () => {
  const { data } = useFiveDayWeather();
  if (!data) return null;

  const [day1, day2, day3, day4, day5] = data.list;

  return (
    <>
      {[day1, day2, day3, day4, day5].map((day) => {
        const { temp, weather } = day;
        const { day: dayTemp, min, max } = temp;
        const { main, icon, description } = weather[0];

        return (
          <Grid item xs={12} md={2.4}>
            {dayTemp}
            {min}
            {max}
            {main}

            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
            {description}
          </Grid>
        );
      })}
    </>
  );
};
