import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  rightBanner: {
    flexDirection: 'row',
  },
  leftBanner: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 18,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#ff5456',
    position: 'absolute',
    left: 27,
    bottom: 15,
    width: 20,
    height: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadText: {
    fontWeight: 'bold',
  },
});
