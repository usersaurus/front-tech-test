import { beforeAll, describe, expect, it, vi } from 'vitest';
import Form from '../form';
import * as yup from 'yup';
import { render, screen } from '@testing-library/react';
import FormField from '../form-field';
import { Button } from '@radix-ui/themes';

const onSubmit = vi.fn(() => vi.fn());

describe('Form', () => {
  beforeAll(() => {
    const formSchema = yup.object({});

    render(
      <Form formSchema={formSchema} onSubmit={onSubmit}>
        <FormField name="name" />
        <FormField name="surname" />
        <Button type="submit">Submit</Button>
      </Form>
    );
  });

  it('should render form with children', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'surname' })).toBeInTheDocument();
  });
});