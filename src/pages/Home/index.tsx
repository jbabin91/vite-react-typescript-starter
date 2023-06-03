import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { apiClient } from '@/api';
import logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/button';

const login = async () => {
  const response = await apiClient.login(undefined);
  return response;
};

const useLogin = () => {
  return useQuery({ enabled: false, queryFn: login, queryKey: ['login'] });
};

const getUser = async () => {
  const response = await apiClient.getUser();
  return response;
};

const useGetUser = () => {
  return useQuery({ enabled: false, queryFn: getUser, queryKey: ['getUser'] });
};

export const Home = () => {
  const [count, setCount] = useState(0);

  const { refetch } = useLogin();
  const { refetch: refetchUser } = useGetUser();

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
        <Button onClick={() => refetch()}>Login</Button>
        <Button onClick={() => refetchUser()}>Get User</Button>
      </div>
    </div>
  );
};

export const Component = Home;
