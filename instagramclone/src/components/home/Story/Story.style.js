import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
  },
  story: {
    top: 2.5,
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 12,
    zIndex: 1,
  },
  storyLinearGradient: {
    width: 75,
    height: 75,
    left: -2.3,
    marginLeft: 12,
    position: 'absolute',
  },
  storyText: {
    position: 'absolute',
    left: 15,
    top: 75,
    fontWeight: 'bold',
    fontSize: 12,
  },
  profilePictureImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
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
  storyContainer: {
    flex: 1,
  },
  profileText: {
    position: 'absolute',
    left: 15,
    top: 75,
    fontWeight: 'bold',
    fontSize: 12,
  },
  storyList: {
    marginLeft: 82,
    flex: 1,
  },
});
