import React from "react";
import styled from "styled-components";

import { useAirPollution } from "./../../hooks/useAirPollution";

const emojiMap = {
  1: "😣",
  2: "😞",
  3: "😑",
  4: "🙂",
  5: "😃",
};

export const AirPollution = () => {
  const { data } = useAirPollution();
  if (!data) return null;

  const { aqi } = data.list[0].main;

  return (
    <Wrapper>
      Air Quality
      <Emoji>{emojiMap[aqi]}</Emoji>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Emoji = styled.div`
  font-size: 80px;
`;
