import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";

import { useFiveDayWeather } from "./../../hooks/useFiveDayWeather";
import { convertToInteger } from "../../utils";

export const FiveDayWeather = () => {
  const { data } = useFiveDayWeather();
  if (!data) return null;

  return (
    <>
      {data.list.map((day) => {
        const { temp, weather, dt } = day;
        const { day: dayTemp, min, max } = temp;
        const { icon, description } = weather[0];

        const d = new Date(dt * 1000);
        const date = format(d, "MMM dd");

        return (
          <Grid item xs={12} md={2.4} key={temp}>
            <StyledPaper>
              <div>{date}</div>
              <div>
                {`${convertToInteger(min)}`}&#176; /
                {` ${convertToInteger(max)}`}
                &#176;
              </div>
              <div className="temp">{convertToInteger(dayTemp)}&#176;</div>

              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
              />
              {description}
            </StyledPaper>
          </Grid>
        );
      })}
    </>
  );
};

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  line-height: 1.5;
  text-transform: capitalize;

  & .temp {
    font-size: 30px;
    font-weight: bold;
  }
`;
