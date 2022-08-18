import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
  },
  story: {
    top: 2.5,
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    zIndex: 1,
  },
  storyLinearGradient: {
    width: 75,
    height: 75,
    left: -2.3,
    marginLeft: 10,
    position: 'absolute',
  },
  profilePicture: {
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
    marginLeft: 82,
    flex: 1,
  },
});
