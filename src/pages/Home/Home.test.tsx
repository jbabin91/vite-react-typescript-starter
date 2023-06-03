import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';

import { Home } from '.';

const queryClient = new QueryClient();

const WrappedHome = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);

test('count is 0 at first', () => {
  render(<WrappedHome />);

  expect(screen.getByText('Count is: 0')).toBeDefined();
});

test('increments count', () => {
  render(<WrappedHome />);

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText('Count is: 1')).toBeDefined();
});
