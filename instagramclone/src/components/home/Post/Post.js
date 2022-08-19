import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Divider } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import { POSTS } from '../../../../data/posts';
import styles from './Post.style';

const Post = () => {
  return (
    <>
      <Divider width={1} orientation="vertical" />
      {POSTS.map((post, index) => (
        <View key={index} style={styles.container}>
          <PostHeader post={post} />
          <PostImage post={post} />
          <PostFooter />
          <Likes post={post} />
        </View>
      ))}
    </>
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

const PostImage = ({ post }) => (
  <View style={styles.postImageContainer}>
    <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
  </View>
);

const PostFooter = () => (
  <View style={styles.postFooter}>
    <View style={styles.postLeftFooter}>
      <IoniconsIcon name="heart-outline" size={30} color="black" />
      <AntIcon style={{ top: 2 }} name="message1" size={27} color="black" />
      <IoniconsIcon name="paper-plane-outline" size={30} color="black" />
    </View>

    <View>
      <IoniconsIcon name="ios-bookmark-outline" size={30} color="black" />
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={styles.likesContainer}>
    <Text style={styles.postLikes}>
      {Platform.OS === 'android'
        ? post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : post.likes.toLocaleString('en')}{' '}
      likes
    </Text>
  </View>
);

export default Post;
