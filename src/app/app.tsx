import RandomNumber from "components/atoms/RandomNumber";

function App() {
  return (
    <main>
      <RandomNumber
        min={-1}
        max={20}
        duration={1500}
        finalValue={20}
        speed={10}
      />
    </main>
  );
}

export default App;
