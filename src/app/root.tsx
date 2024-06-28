import { Outlet } from "react-router-dom";
import { Container } from '@radix-ui/themes';

export const AppRoot = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};