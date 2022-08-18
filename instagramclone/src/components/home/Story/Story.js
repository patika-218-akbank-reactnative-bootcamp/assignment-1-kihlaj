import React from 'react';
import { View, Image, FlatList, ScrollView } from 'react-native';

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
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}>
      <View>
        <Image
          style={styles.profilePicture}
          source={require('../../../../assets/138.jpg')}
        />
        <Image
          style={styles.profilePlusIcon}
          source={require('../../../../assets/instagram-profile-plus.png')}
        />
      </View>
      <View style={styles.storyContainer}>
        <FlatList
          data={USERS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Story;
