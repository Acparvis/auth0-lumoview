import { useAuth0 } from 'react-native-auth0';
import MapboxGL from '@rnmapbox/maps';
import { View } from 'react-native';
import { useEffect, useMemo } from 'react';
import { locationSwitch } from '~/components/Map/utils';
import { styles } from '~/components/Map/styles';
import { useTranslation } from 'react-i18next';

MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_API_KEY as string);

export const Map = () => {
  const { i18n } = useTranslation();
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
        <MapboxGL.MapView
          style={styles.map}
          localizeLabels={{ locale: i18n.language }}
          testID="map-view">
          <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={coordinates}
            // @ts-ignore
            testID="map-camera"
          />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};
