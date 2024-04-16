import { useAuth0 } from 'react-native-auth0';
import MapboxGL from '@rnmapbox/maps';
import { View } from 'react-native';
import { useEffect, useMemo } from 'react';
import { locationSwitch } from '~/components/Map/utils';
import { styles } from '~/components/Map/styles';

MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_API_KEY as string);

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
