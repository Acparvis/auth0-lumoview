import { useAuth0 } from 'react-native-auth0';
import { Button } from '../Button';

interface LoginButtonProps {
  setIsLoading: (isLoading: boolean) => void;
}
export const LoginButton = ({ setIsLoading }: LoginButtonProps) => {
  const { authorize, user } = useAuth0();

  const onPress = async () => {
    try {
      setIsLoading(true);
      await authorize().then(() => setIsLoading(false));
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in / Sign up" />;
};
