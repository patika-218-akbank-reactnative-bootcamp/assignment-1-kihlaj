import React from 'react';
import { View } from 'react-native';

import styles from './HomeScreen.style';
import Banner from '../../components/home/Banner';
import Story from '../../components/home/Story';
import Post from '../../components/home/Post';
import BottomNav from '../../components/home/BottomNav';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <Story />
      <Post />
      <BottomNav />
    </View>
  );
};

export default HomeScreen;
