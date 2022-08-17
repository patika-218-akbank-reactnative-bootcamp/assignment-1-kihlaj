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

const Banner = ({children}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          source={require('../../../../assets/Instagram_logo.png')}
          style={styles.logo}
        />
      </Pressable>
      <View style={styles.icons}>
        <Pressable>
          <Icon
            style={styles.icon}
            name="plus-box-multiple-outline"
            size={25}
            color="black"
          />
        </Pressable>
        <Pressable>
          <Icon
            style={styles.icon}
            name="cards-heart"
            size={25}
            color="black"
          />
        </Pressable>
        <Pressable>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>2</Text>
          </View>
          <Icon
            style={styles.icon}
            name="message-outline"
            size={25}
            color="black"
          />
        </Pressable>
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
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#ff5456',
    position: 'absolute',
    left: 20,
    bottom: 15,
    width: 20,
    height: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
});

export default Banner;
