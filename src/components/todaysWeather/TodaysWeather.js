import React, { useContext } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";

import { useWeather } from "./../../hooks/useWeather";
import { UnitContext } from "../../contexts/unitContext";
import { convertToInteger } from "../../utils";

export const TodaysWeather = () => {
  const { data } = useWeather();
  const { unit } = useContext(UnitContext);

  if (!data) return null;

  const { timezone, main, weather } = data;
  const { icon, description } = weather[0];
  const { temp, feels_like, temp_min, temp_max } = main;

  const date = Date.now() + 1000 * timezone;
  const formattedDate = format(date, "MMM dd");

  const unitSymbol = unit === "imperial" ? "F" : "C";

  return (
    <Container>
      <LeftSide>
        <div>{formattedDate}</div>
        <div>
          {`${convertToInteger(temp_min)}`}&#176; /{" "}
          {`${convertToInteger(temp_max)}`}&#176;
        </div>
        <div className="temp">
          {convertToInteger(temp)}&#176;
          {unitSymbol}
        </div>
        <div>Feels like {convertToInteger(feels_like)}&#176;</div>
      </LeftSide>

      <RightSide>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        {description}
      </RightSide>
    </Container>
  );
};

const Container = styled(Paper)`
  display: flex;
  padding: 15px;
  height: 150px;
`;

const LeftSide = styled.div`
  width: 50%;

  > div {
    line-height: 1.5;
  }

  & .temp {
    font-size: 50px;
    font-weight: bold;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  width: 50%;
`;
