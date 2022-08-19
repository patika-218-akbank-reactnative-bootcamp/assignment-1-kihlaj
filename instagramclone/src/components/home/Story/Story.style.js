import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flex: 1,
  },
  profilePictureImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    top: 2.5,
    marginLeft: 10,
  },
  profilePlusIcon: {
    width: 20,
    height: 20,
    left: 60,
    top: 50,
    position: 'absolute',
  },
  profileText: {
    position: 'absolute',
    left: 15,
    top: 78,
    fontWeight: '400',
    color: '#000',
    fontSize: 13,
  },
  storyList: {
    padding: 5,
  },
  storyLinearGradient: {
    width: 75,
    height: 75,
    left: 2,
    marginLeft: 14,
    position: 'absolute',
  },
  story: {
    bottom: 2,
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 14,
    zIndex: 1,
  },
  storyText: {
    position: 'absolute',
    left: 28,
    top: 78,
    fontWeight: '400',
    color: '#000',
    fontSize: 13,
  },
});
