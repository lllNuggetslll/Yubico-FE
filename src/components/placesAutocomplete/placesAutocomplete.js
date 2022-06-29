import { useContext } from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { PlaceContext } from "../../contexts/PlaceContext";

export const PlacesAutocomplete = () => {
  const { selectPlace } = useContext(PlaceContext);

  const suggestionSelect = (result, lat, lng, text) => {
    selectPlace({ result, lat, lng, text });
  };

  return (
    <MapboxAutocomplete
      publicKey={process.env.REACT_APP_MAPBOX_API_KEY}
      inputClass="form-control search"
      onSuggestionSelect={suggestionSelect}
      country="us"
      resetSearch={false}
    />
  );
};
