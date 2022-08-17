import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


Icon.loadFont();

const Banner = ({children}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          source={require('../../../assets/Instagram_logo.png')}
          style={styles.logo}
        />
      </Pressable>
      <View style={styles.icons}>
        <Icon name="home" size={24} color="black" />
        <Text>xD</Text>
        <Text>xD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  icons: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Banner;
