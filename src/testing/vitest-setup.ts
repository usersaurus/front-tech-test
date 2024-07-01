import '@testing-library/jest-dom/vitest';

import { vi } from 'vitest';

vi.mock('@radix-ui/themes', async (importOriginal) => {
  const mod = await importOriginal() as typeof importOriginal;

  return {
    ...mod,
    Tooltip: ({ children }: { children: JSX.Element }) => children,
  };
});

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal() as typeof importOriginal;

  return {
    ...mod,
    useNavigate: vi.fn(() => vi.fn()),
  };
});