import { expect, describe, it, beforeAll } from 'vitest';
import AddButton from '../add-button';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

describe('AddButton', () => {
  beforeAll(() => {
    render(<AddButton />);
  });

  it('should render button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render icon', () => {
    expect(screen.getByLabelText('add planet icon')).toBeInTheDocument();
  });

  it('should call to useNavigate when button is clicked', () => {
    fireEvent.click(screen.getByRole('button'));

    expect(useNavigate).toHaveBeenCalled();
  });
});
