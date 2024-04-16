import { useAuth0 } from 'react-native-auth0';
import { Button } from '../Button';
import {useTranslation} from "react-i18next";

export const LogoutButton = () => {
  const { t } = useTranslation();
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title={t('logOut')} />;
};
