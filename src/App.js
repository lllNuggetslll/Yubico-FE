import { WeatherAppWrapper } from "./components/weatherAppWrapper";
import { PlaceProvider, QueryProvider } from "./contexts";

function App() {
  return (
    <div>
      <PlaceProvider>
        <QueryProvider>
          <WeatherAppWrapper />
        </QueryProvider>
      </PlaceProvider>
    </div>
  );
}

export default App;
