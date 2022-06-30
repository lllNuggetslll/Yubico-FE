import { WeatherAppWrapper } from "./components/weatherAppWrapper";
import { PlaceProvider, QueryProvider, UnitProvider } from "./contexts";

function App() {
  return (
    <>
      <UnitProvider>
        <PlaceProvider>
          <QueryProvider>
            <WeatherAppWrapper />
          </QueryProvider>
        </PlaceProvider>
      </UnitProvider>
    </>
  );
}

export default App;
