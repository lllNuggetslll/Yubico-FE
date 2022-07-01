import React from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";

import { useAirPollution } from "./../../hooks/useAirPollution";
import { useWeather } from "./../../hooks/useWeather";

const emojiMap = {
  1: "😃",
  2: "🙂",
  3: "😑",
  4: "😞",
  5: "😣",
};

export const AirPollution = () => {
  const { data } = useAirPollution();
  const { data: weatherData } = useWeather();

  if (!data || !weatherData) return null;

  const { aqi } = data.list[0].main;
  const { main } = weatherData;
  const { humidity, pressure } = main;

  return (
    <Container>
      <LeftSide>
        Air Quality
        <Emoji>{emojiMap[aqi]}</Emoji>
      </LeftSide>

      <RightSide>
        <div>humidity: {humidity}%</div>
        <div>Pressure: {pressure} hPa</div>
      </RightSide>
    </Container>
  );
};

const Container = styled(Paper)`
  height: 150px;
  padding: 15px;
  display: flex;
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Emoji = styled.div`
  font-size: 80px;
`;
