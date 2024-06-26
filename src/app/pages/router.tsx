import { createBrowserRouter } from "react-router-dom";
import { AppRoot } from "@/app/root";
import SWStore, { setupStore } from "@/store";

export const createRouter = () => createBrowserRouter([
  {
    path: "/",
    element: (
      <AppRoot />
    ),
    loader: async () => {
      const fetched = SWStore(state => state.fetched);
      if (fetched) return null;

      await setupStore();

      return null;
    },
    children: [
      {
        path: 'planets',
        children: [
          {
            index: true,
            lazy: async () => {
              const { PlanetsRoute } = await import('@/app/pages/planets/planets');

              return { Component: PlanetsRoute };
            },
          },
          {
            path: ':id',
            lazy: async () => {
              const { PlanetViewRoute } = await import('@/app/pages/planets/planet-view');

              return { Component: PlanetViewRoute };
            }
          }
        ]
      }
    ]
  }
]);