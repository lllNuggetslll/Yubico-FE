import React, { useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { UnitContext } from "../../contexts/unitContext";

export const UnitToggleButton = () => {
  const { unit, toggleUnit } = useContext(UnitContext);

  return (
    <ToggleButtonGroup
      color="primary"
      value={unit}
      exclusive
      onChange={(props, value) => {
        if (value !== null) {
          toggleUnit(value);
        }
      }}
    >
      <ToggleButton value="imperial">F</ToggleButton>
      <ToggleButton value="metric">C</ToggleButton>
    </ToggleButtonGroup>
  );
};
