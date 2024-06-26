// import GET_PLANETS, { GetPlanetsData } from "@/graphql/queries/get-planets";
// import { useQuery } from "@apollo/client";

// function App() {
//   const { loading, error, data } = useQuery<GetPlanetsData>(GET_PLANETS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return (
//     <>
//       {data?.allPlanets.planets.map((planet) => (
//         <div key={planet.name}>{planet.name}</div>
//       ))}
//     </>
//   );
// }

// export default App;

import { RouterProvider } from 'react-router-dom';
import MainProvider from './main-provider';
import { createRouter } from './pages/router';

const AppRouter = () => {
  const router = createRouter();

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <MainProvider>
      <AppRouter />
    </MainProvider>
  );
}

export default App;