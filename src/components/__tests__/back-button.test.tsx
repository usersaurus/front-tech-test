import { expect, describe, it, beforeAll, vi } from 'vitest';
import BackButton from '../back-button';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';


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

describe('BackButton', () => {

  beforeAll(() => {
    render(<BackButton />);
  });

  it('should render button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render icon', () => {
    expect(screen.getByLabelText('back icon')).toBeInTheDocument();
  });

  it('should call to useNavigate when button is clicked', () => {
    fireEvent.click(screen.getByRole('button'));

    expect(useNavigate).toHaveBeenCalled();
  });
});