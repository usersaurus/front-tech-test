import { createBrowserRouter } from "react-router-dom";
import { AppRoot } from "@/app/root";
import { useSWStore, setupStore } from "@/store";

export const createRouter = () => createBrowserRouter([
  {
    path: "/",
    element: (
      <AppRoot />
    ),
    loader: async () => {
      const fetched = useSWStore.getState().fetched;
      if (fetched) return null;

      await setupStore();

      return null;
    },
    children: [
      {
        path: '/',
        children: [
          {
            index: true,
            lazy: async () => {
              const { PlanetsRoute } = await import('@/app/pages/planets/planets');

              return { Component: PlanetsRoute };
            },
          },
          {
            path: '/:id',
            lazy: async () => {
              console.log('planet view');
              const { PlanetViewRoute } = await import('@/app/pages/planets/planet-view');

              return { Component: PlanetViewRoute };
            },
          },
          {
            path: ':id/edit',
            lazy: async () => {
              const { EditPlanetRoute } = await import('@/app/pages/planets/edit-planet');

              return { Component: EditPlanetRoute };
            },
          },
          {
            path: 'create',
            lazy: async () => {
              const { CreatePlanetRoute } = await import('@/app/pages/planets/create-planet');

              return { Component: CreatePlanetRoute };
            },
          }
        ]
      }
    ]
  }
]);