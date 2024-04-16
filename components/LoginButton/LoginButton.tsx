import { useAuth0 } from 'react-native-auth0';
import { Button } from '../Button';
import {useTranslation} from "react-i18next";

interface LoginButtonProps {
  setIsLoading: (isLoading: boolean) => void;
}
export const LoginButton = ({ setIsLoading }: LoginButtonProps) => {
  const { t, i18n } = useTranslation();
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      setIsLoading(true);
      await authorize({ additionalParameters: { ui_locales: i18n.language } }).then(() =>
        setIsLoading(false)
      );
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title={t('loginSignUp')} />;
};
