import { expect, describe, it, beforeAll } from 'vitest';
import Dialog from '../dialog';
import { render, screen, fireEvent } from '@testing-library/react';

const alertDescription = 'Are you sure you want to remove this planet from the Rebel Alliance database? The Galactic Empire will know.';
const confirmText = 'Delete planet';
const cancelText = 'Cancel';

describe('Dialog', () => {
  beforeAll(() => {
    render(
      <Dialog
        alertDescription={alertDescription}
        confirmText={confirmText}
        cancelText={cancelText}
        onConfirm={() => { }}
        onCancel={() => { }}
      />
    );
  });

  it('should render only a button when first rendered', () => {
    expect(screen.getByRole('button', { name: 'alert button' })).toBeInTheDocument();
    expect(screen.queryByText(cancelText)).not.toBeInTheDocument();
  });

  it('should render dialog when the button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: 'alert button' }));

    expect(screen.getByRole('button', { name: confirmText })).toBeInTheDocument();
    expect(screen.getByText(alertDescription)).toBeInTheDocument();
  });
});