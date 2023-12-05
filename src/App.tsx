import Map from "./components/Map";

function App() {
  const center = { lat: 50.4008056, lng: 29.908886 };
  const zoom = 3.5;
  return (
    <div>
      <h1> Google Map Prototype</h1>
      <Map center={center} zoom={zoom} />
    </div>
  );
}

export default App;
