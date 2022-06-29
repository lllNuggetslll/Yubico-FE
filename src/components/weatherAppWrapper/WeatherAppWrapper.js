import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PlacesAutocomplete } from "../placesAutocomplete";

export const WeatherAppWrapper = () => {
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1, margin: "5px" }}>
        <Grid container spacing={1}>
          <Grid item xs={8} md={12}>
            <PlacesAutocomplete />
          </Grid>
          <Grid item xs={6} md={6}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={6}>
            <Emoji>😣</Emoji>
          </Grid>
          <Grid item xs={6} md={2}>
            {" "}
            <Item>xs=6 md=8</Item>
          </Grid>{" "}
          <Grid item xs={6} md={2}>
            <Item>xs=6 md=8</Item>
          </Grid>{" "}
          <Grid item xs={6} md={2}>
            <Item>xs=6 md=8</Item>
          </Grid>{" "}
          <Grid item xs={6} md={2}>
            <Item>xs=6 md=8</Item>
          </Grid>{" "}
          <Grid item xs={6} md={2}>
            <Item>xs=6 md=8</Item>
          </Grid>{" "}
          <Grid item xs={6} md={2}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  margin: 50px;
`;

const Item = styled.div`
  border: 1px solid black;
  height: 100%;
`;

const Emoji = styled.div`
  font-size: 100px;
`;
