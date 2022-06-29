import { ParentWrapper } from "./components/views";
import { PlaceProvider, QueryProvider } from "./contexts";

function App() {
  return (
    <div>
      <PlaceProvider>
        <QueryProvider>
          <ParentWrapper />
        </QueryProvider>
      </PlaceProvider>
    </div>
  );
}

export default App;
