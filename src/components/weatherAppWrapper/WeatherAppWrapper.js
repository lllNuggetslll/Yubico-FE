import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PlacesAutocomplete } from "../placesAutocomplete";
import { TodaysWeather } from "../todaysWeather";
import { AirPollution } from "../airPollution";
import { FiveDayWeather } from "../fiveDayWeather";
import { UnitToggleButton } from "../unitToggleButton";

export const WeatherAppWrapper = () => {
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1, margin: "5px" }}>
        <Grid container spacing={1}>
          <Grid item xs={8} md={10}>
            <PlacesAutocomplete />
          </Grid>

          <Grid item xs={8} md={2}>
            <UnitToggleButton />
          </Grid>

          <Grid item xs={6} md={6}>
            <TodaysWeather />
          </Grid>
          <Grid item xs={6} md={6}>
            <AirPollution />
          </Grid>
          <FiveDayWeather />
        </Grid>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  margin: 50px;
`;
