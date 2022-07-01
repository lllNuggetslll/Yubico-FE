import React, { useContext } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { PlacesAutocomplete } from "../placesAutocomplete";
import { TodaysWeather } from "../todaysWeather";
import { AirPollution } from "../airPollution";
import { FiveDayWeather } from "../fiveDayWeather";
import { UnitToggleButton } from "../unitToggleButton";
import { GetLocalWeatherButton } from "../getLocalWeatherButton";

import { PlaceContext } from "../../contexts/PlaceContext";

export const WeatherAppWrapper = () => {
  const { place } = useContext(PlaceContext);

  return (
    <Wrapper>
      <Grid container spacing={1}>
        <Grid item xs={8} md={8}>
          <PlacesAutocomplete />
        </Grid>

        <Grid item xs={8} md={2}>
          <GetLocalWeatherButton />
        </Grid>

        <Grid item xs={8} md={2}>
          <UnitToggleButton />
        </Grid>

        <Grid item xs={8} md={12}>
          <HeaderContainer>
            <h1>{place.result}</h1>
          </HeaderContainer>
        </Grid>

        <Grid item xs={6} md={6}>
          <TodaysWeather />
        </Grid>

        <Grid item xs={6} md={6}>
          <AirPollution />
        </Grid>

        <Grid item xs={8} md={12}>
          <HeaderContainer>
            <h1>5 Day Forecast</h1>
          </HeaderContainer>
        </Grid>

        <FiveDayWeather />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  flex-grow: 1;
  border-radius: 10px;
  margin: 50px;
  display: flex;
  justify-content: center;
  padding: 24px;
  background-color: rgb(231, 235, 240);
  font-family: roboto;
`;

const HeaderContainer = styled(Paper)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
