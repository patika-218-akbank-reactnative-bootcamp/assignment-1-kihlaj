import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  leftBanner: {
    flex: 3,
    flexDirection: 'row',
  },
  leftIcon: {
    width: 25,
    height: 25,
    top: 10,
    marginRight: 12,
    resizeMode: 'contain',
  },
  rightBanner: {
    flex: 1,
    flexDirection: 'row',
  },
  rightIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#ff5456',
    position: 'absolute',
    left: 33,
    bottom: 14,
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
