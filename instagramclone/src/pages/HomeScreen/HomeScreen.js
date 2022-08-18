import React from 'react';
import { View } from 'react-native';

import styles from './HomeScreen.style';
import Banner from '../../components/home/Banner';
import Story from '../../components/home/Story';
import Post from '../../components/home/Post';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <Story />
      <Post />
    </View>
  );
};

export default HomeScreen;
