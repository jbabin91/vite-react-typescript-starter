import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/api';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

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

export const About = () => {
  const { toast } = useToast();

  const { refetch } = useLogin();
  const { refetch: refetchUser } = useGetUser();

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">About</h1>
        <p>Hello from the about page</p>
        <Button
          onClick={() => {
            toast({
              description: 'Your message has been sent.',
            });
          }}
        >
          Show Simple Toast
        </Button>
        <Button
          onClick={() => {
            toast({
              description: 'There was a problem with your request.',
              title: 'Uh oh! Something went wrong.',
            });
          }}
        >
          Show Toast with Title
        </Button>
        <Button
          onClick={() => {
            toast({
              action: <ToastAction altText="Try again">Try again</ToastAction>,
              description: 'There was a problem with your request.',
              title: 'Uh oh! Something went wrong.',
            });
          }}
        >
          Show Toast with Action
        </Button>
        <Button
          onClick={() => {
            toast({
              action: <ToastAction altText="Try again">Try again</ToastAction>,
              description: 'There was a problem with your request.',
              title: 'Uh oh! Something went wrong.',
              variant: 'destructive',
            });
          }}
        >
          Show Toast Destructive
        </Button>
        <div>
          <Button onClick={() => refetch()}>Login</Button>
          <Button onClick={() => refetchUser()}>Get User</Button>
        </div>
      </div>
    </div>
  );
};

export const Component = About;
