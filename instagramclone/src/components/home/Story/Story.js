import React from 'react';
import { View, Image, FlatList, ScrollView, Text } from 'react-native';

import { USERS } from '../../../../data/users';
import styles from './Story.style';

const Story = () => {
  const renderItem = ({ item }) => (
    <>
      {item.id == 1 ? (
        <View>
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
      ) : (
        <View style={{ textAlign: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../../../assets/instagram-story-linear-gradient.png')}
            style={styles.storyLinearGradient}
          />
          <Image source={{ uri: item.image }} style={styles.story} />
          <Text style={styles.storyText}>
            {item.nick_name.length > 9
              ? item.nick_name.slice(0, 8).toLowerCase() + '...'
              : item.nick_name.toLowerCase()}
          </Text>
        </View>
      )}
    </>
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
