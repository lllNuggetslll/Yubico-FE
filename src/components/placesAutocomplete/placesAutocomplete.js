import { useContext } from "react";
import styled from "styled-components";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import Paper from "@mui/material/Paper";

import { PlaceContext } from "../../contexts/PlaceContext";

export const PlacesAutocomplete = () => {
  const { selectPlace } = useContext(PlaceContext);

  const suggestionSelect = (result, lat, lng, text) => {
    selectPlace({ result, lat, lng, text });
  };

  return (
    <Container>
      <MapboxAutocomplete
        publicKey={process.env.REACT_APP_MAPBOX_API_KEY}
        inputClass="form-control search"
        onSuggestionSelect={suggestionSelect}
        resetSearch={true}
        placeholder="Enter city or zip code"
      />
    </Container>
  );
};

const Container = styled(Paper)`
  padding-left: 25px;
  display: flex;
  padding-top: 1.5rem;

  & .search {
    border: none;
  }
`;
