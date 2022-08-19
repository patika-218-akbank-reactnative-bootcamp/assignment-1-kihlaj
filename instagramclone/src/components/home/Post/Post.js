import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import { POSTS } from '../../../../data/posts';
import styles from './Post.style';

const Post = () => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <ScrollView>
        {POSTS.map((post, index) => (
          <PostHeader key={index} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.postHeader}>
    <View style={styles.postHeaderTop}>
      <Image
        source={{ uri: post.profile_picture }}
        style={styles.postHeaderImage}
      />
      <Text style={styles.postHeaderText}>{post.user}</Text>
    </View>

    <Image
      style={styles.postHeaderThreeDots}
      source={require('../../../../assets/post-header-three-dots.png')}
    />
  </View>
);

export default Post;
