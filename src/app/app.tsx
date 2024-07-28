import RandomNumber from "components/atoms/RandomNumber";

function App() {
  return (
    <main>
      <RandomNumber min={-1} max={20} rolls={50} finalValue={20} speed={10} />
    </main>
  );
}

export default App;
