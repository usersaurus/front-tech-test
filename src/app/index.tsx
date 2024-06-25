import getAllPlanets from "@/api/get-planets";

function App() {
  getAllPlanets().then((planets) => {
    console.log('Planets:');
    console.log(planets);
  });

  return (
    <>
      app
    </>
  );
}

export default App;
