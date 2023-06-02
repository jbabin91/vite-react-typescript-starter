import '@/App.css';

import { RouterProvider } from '@tanstack/router';

import { router } from '@/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
