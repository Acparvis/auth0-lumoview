import { useAuth0 } from 'react-native-auth0';
import { YStack, SizableText, XStack, Paragraph } from 'tamagui';
import MapboxGL from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { useEffect, useMemo } from 'react';
import { locationSwitch } from '~/components/Map/constants';

MapboxGL.setAccessToken('pk.eyJ1Ijoic3RhZ2ljZGV2IiwiYSI6ImNsdXpsMjdkNTFkcHUycW53d2Q0ODRhcm4ifQ.P7X052_AEAgusg-y0r-5Wg');

export const Map = () => {
  const { user } = useAuth0();

  const userIsAdmin = user?.['https://lumoview.com/roles']?.includes('Admin');

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  const coordinates = useMemo(() => {
    const location = userIsAdmin ? 'kolnerDom' : 'bigBen';
    return locationSwitch(location);
  }, [userIsAdmin]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={15} // Sets the zoom level of the map
            centerCoordinate={coordinates} // Sets the initial camera position to Big Ben
          />
        </MapboxGL.MapView>
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
