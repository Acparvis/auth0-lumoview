import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Button } from '../Button';

export const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (locale: 'en' | 'de') => {
    i18n.changeLanguage(locale);
  };
  return (
    <>
      <View style={styles.content}>
        <Button title={t('button.german')} onPress={() => toggleLanguage('de')} />
        <Button title={t('button.english')} onPress={() => toggleLanguage('en')} />
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  content: { gap: 6 },
});
