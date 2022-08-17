import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Banner.style';

const Banner = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBanner}>
        <Pressable>
          <Icon
            style={styles.icon}
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
          <Icon
            style={styles.icon}
            name="cards-heart-outline"
            size={25}
            color="black"
          />
        </Pressable>
        <Pressable>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>2</Text>
          </View>
          <Icon style={styles.icon} name="send" size={25} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Banner;
