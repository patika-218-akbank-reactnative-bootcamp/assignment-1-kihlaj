import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  postWrapper: {
    top: 5,
  },
  postDivider: {
    top: 0,
  },
  container: {
    marginBottom: 30,
    top: 10,
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
  postFooterIcon: { top: 2 },
  postLikes: { fontWeight: '700', color: '#000' },
  likesContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 15,
  },
  captionContainer: {
    marginLeft: 15,
    marginTop: 5,
    flexDirection: 'row',
  },
  captionUserText: { fontWeight: '700', color: 'black' },
  captionText: { fontWeight: '400', color: 'black' },
  commentSectionContainer: {
    marginLeft: 15,
    marginTop: 4,
  },
  commentsContainer: {
    marginLeft: 15,
    marginTop: 3,
    flexDirection: 'row',
  },
  commentUserText: {
    fontWeight: '400',
    color: 'black',
  },
});
