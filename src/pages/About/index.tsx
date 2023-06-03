import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export const About = () => {
  const { toast } = useToast();
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="text-3xl font-bold underline">About</h1>
        <p>Hello from the about page</p>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              description: 'Your message has been sent.',
            });
          }}
        >
          Show Simple Toast
        </Button>
        <Button
          variant="outline"
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
          variant="outline"
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
          variant="outline"
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
      </div>
    </div>
  );
};

export const Component = About;
