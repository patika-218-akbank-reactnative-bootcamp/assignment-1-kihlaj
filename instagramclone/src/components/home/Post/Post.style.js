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
    width: 48,
    height: 48,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#d62976',
  },
  postHeaderText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  postHeaderTop: { flexDirection: 'row', alignItems: 'center' },
  postHeaderThreeDots: { width: 12, height: 12, resizeMode: 'contain' },
  postImageContainer: { width: '100%', height: 450 },
  postImage: { height: '100%', resizeMode: 'cover' },
  postFooter: {
    marginHorizontal: 12,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postLeftFooter: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
  postLikes: { fontWeight: '600', color: '#000' },
  likesContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 15,
  },
});
