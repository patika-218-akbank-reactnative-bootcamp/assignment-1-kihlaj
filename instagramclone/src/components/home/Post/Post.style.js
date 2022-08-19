import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  postHeaderImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#d62976',
  },
  postHeaderText: {
    marginLeft: 5,
    fontWeight: '700',
    color: '#000',
  },
  postHeaderTop: { flexDirection: 'row', alignItems: 'center' },
  postHeaderThreeDots: { width: 12, height: 12, resizeMode: 'contain' },
});
