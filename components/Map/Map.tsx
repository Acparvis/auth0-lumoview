import { useAuth0 } from 'react-native-auth0';
import { YStack, SizableText, XStack, Paragraph } from 'tamagui';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StyleSheet, View } from 'react-native';

MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_API_KEY || '');

export const Map = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  container: {
    height: 300,

    width: 300,
  },

  map: {
    flex: 1,
  },
});
