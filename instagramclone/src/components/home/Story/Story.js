import React from 'react';
import { View, Image, FlatList } from 'react-native';

import { USERS } from '../../../../data/users';
import styles from './Story.style';

const Story = () => {
  const renderItem = ({ item }) => (
    <View>
      <Image
        source={require('../../../../assets/instagram-story-linear-gradient.png')}
        style={styles.storyLinearGradient}
      />
      <Image source={{ uri: item.image }} style={styles.story} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={USERS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Story;
