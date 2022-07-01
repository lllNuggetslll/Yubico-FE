import React, { useContext } from "react";
import styled from "styled-components";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { UnitContext } from "../../contexts/unitContext";

export const UnitToggleButton = () => {
  const { unit, toggleUnit } = useContext(UnitContext);

  return (
    <StyledToggleButtonGroup
      color="primary"
      value={unit}
      exclusive
      onChange={(props, value) => {
        if (value !== null) {
          toggleUnit(value);
        }
      }}
    >
      <ToggleButton value="imperial">&#176;F</ToggleButton>
      <ToggleButton value="metric">&#176;C</ToggleButton>
    </StyledToggleButtonGroup>
  );
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  height: 100%;

  & .MuiButtonBase-root {
    width: 100px;
  }
`;
