import { fireEvent, render, screen } from '@testing-library/react';

import { Home } from '.';

test('count is 0 at first', () => {
  render(<Home />);

  expect(screen.getByText('Count is: 0')).toBeDefined();
});

test('increments count', () => {
  render(<Home />);

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText('Count is: 1')).toBeDefined();
});
