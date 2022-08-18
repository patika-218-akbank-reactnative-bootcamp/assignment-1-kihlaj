import React from 'react';
import { View, Image, FlatList, ScrollView, Text } from 'react-native';

import { USERS } from '../../../../data/users';
import styles from './Story.style';

const Story = () => {
  const renderItem = ({ item }) => (
    <View style={{ textAlign: 'center' }}>
      <Image
        source={require('../../../../assets/instagram-story-linear-gradient.png')}
        style={styles.storyLinearGradient}
      />
      <Image source={{ uri: item.image }} style={styles.story} />
      <Text style={styles.storyText}>
        {item.nick_name.length > 10
          ? item.nick_name.slice(0, 9).toLowerCase() + '...'
          : item.nick_name.toLowerCase()}{' '}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.storyContainer}>
        <View style={styles.profilePicture}>
          <Image
            style={styles.profilePictureImage}
            source={require('../../../../assets/138.jpg')}
          />
          <Image
            style={styles.profilePlusIcon}
            source={require('../../../../assets/instagram-profile-plus.png')}
          />
          <Text style={styles.profileText}>Your Story</Text>
        </View>
        <View style={styles.storyList}>
          <FlatList
            data={USERS}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Story;
