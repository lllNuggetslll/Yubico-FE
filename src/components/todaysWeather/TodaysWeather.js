import React from "react";
import styled from "styled-components";

import { useWeather } from "./../../hooks/useWeather";

export const TodaysWeather = () => {
  const { data } = useWeather();
  if (!data) return null;

  const { timezone, main, weather } = data;
  const { icon, description } = weather[0];
  const { temp, feels_like, temp_min, temp_max, humidity, pressure } = main;
  var d = new Date(new Date().getTime() - timezone * 1000);

  return (
    <Container>
      <LeftSide>
        <div>{d.toISOString()}</div>
        <div>
          {`${temp_min}`}&#176; / {`${temp_max}`}&#176;
        </div>
        <div>{temp}&#8451;</div>
        <div>{feels_like}&#8457;</div>
        <div>{humidity}</div>
        <div>{pressure}</div>
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

const Container = styled.div`
  border: 1px solid black;
  display: flex;
`;

const LeftSide = styled.div`
  width: 50%;
`;

const RightSide = styled.div`
  width: 50%;
`;
