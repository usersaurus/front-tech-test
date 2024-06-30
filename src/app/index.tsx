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