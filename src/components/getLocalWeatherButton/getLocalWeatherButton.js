import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { PlaceContext } from "../../contexts/PlaceContext";

export const GetLocalWeatherButton = () => {
  const { getLocalPlace } = useContext(PlaceContext);

  return (
    <StyledButton variant="contained" onClick={() => getLocalPlace()}>
      Get Local Weather
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  height: 67px;
`;
