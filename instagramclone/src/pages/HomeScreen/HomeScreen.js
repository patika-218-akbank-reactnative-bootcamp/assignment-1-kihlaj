import React from 'react';
import { View } from 'react-native';

import styles from './HomeScreen.style';
import Banner from '../../components/home/Banner/Banner';
import Story from '../../components/home/Story';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <Story />
    </View>
  );
};

export default HomeScreen;
