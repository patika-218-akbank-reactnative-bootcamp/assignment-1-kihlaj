import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import styles from './Banner.style';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBanner}>
        <Pressable>
          <MaterialIcon
            style={styles.leftIcon}
            name="plus-box-multiple-outline"
            size={25}
            color="black"
          />
        </Pressable>
        <Pressable>
          <Image
            source={require('../../../../assets/Instagram_logo.png')}
            style={styles.logo}
          />
        </Pressable>
      </View>
      <View style={styles.rightBanner}>
        <Pressable>
          <MaterialIcon
            style={styles.rightIcon}
            name="cards-heart-outline"
            size={25}
            color="black"
          />
        </Pressable>
        <Pressable>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>2</Text>
          </View>
          <IoniconsIcon
            style={styles.rightIcon}
            name="paper-plane-outline"
            size={25}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Banner;
