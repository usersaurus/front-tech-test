import { render, screen } from '@testing-library/react';
import { describe, vi, it, beforeAll, expect, beforeEach } from 'vitest';
import Pagination from '../pagination';

const onChange = vi.fn();

describe('Pagination', () => {
  beforeAll(() => {
    render(<Pagination current={1} total={2} onChange={onChange} />);
  });

  beforeEach(() => {
    onChange.mockClear();
  });

  it('should render the current page', () => {
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should render the previous button', () => {
    expect(screen.getByRole('button', { name: "previous button" })).toBeInTheDocument();
  });

  it('should render the next button', () => {
    expect(screen.getByRole('button', { name: "next button" })).toBeInTheDocument();
  });

  it('should NOT call onChange with the previous page (since we are in page 1)', () => {
    screen.getByRole('button', { name: "previous button" }).click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should call onChange with the next page', () => {
    screen.getByRole('button', { name: "next button" }).click();
    expect(onChange).toHaveBeenCalled();
  });

  it('should NOT call onChange with the next page (since we are in the last one)', () => {
    screen.getByRole('button', { name: "next button" }).click();

    expect(onChange).not.toHaveBeenCalled();
  });
});