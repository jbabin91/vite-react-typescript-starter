import { useState } from 'react';

import logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/button';

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <img alt="logo" src={logo} />
        <h1 className="text-3xl font-bold">Hello Vite + React!</h1>
        <p>
          <Button onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </div>
  );
};

export const Component = Home;
