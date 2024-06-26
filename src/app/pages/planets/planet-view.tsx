import PlanetViewContainer from '@/features/planets/components/planet-view';
import ResidentListContainer from '@/features/residents/components/resident-list';
import { useParams } from 'react-router-dom';

export const PlanetViewRoute = () => {
  const { id } = useParams();

  if (!id) return <>Planet not found</>;

  return (
    <>
      <PlanetViewContainer />
      <ResidentListContainer planetId={id} />
    </>
  );
};