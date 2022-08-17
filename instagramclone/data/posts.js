import { USERS } from './users';

export const POSTS = [
  {
    id: 1,
    imageUrl:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/15951/production/_117310488_16.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Train Ride to Hograts. xD',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'theqazman',
        comment: 'Wow! This build looks fire. Super excited about ',
      },
      {
        user: 'theqazman',
        comment: 'Wow! This build looks fire. Super excited about ',
      },
    ],
  },
  {
    id: 2,
    imageUrl:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/15C0D/production/_117310198_03.jpg',
    user: USERS[2].user,
    likes: 7870,
    caption: 'Train Ride to Hograts. xD',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'theqazman',
        comment: 'Wow! This build looks fire. Super excited about ',
      },
      {
        user: 'theqazman',
        comment: 'Wow! This build looks fire. Super excited about ',
      },
    ],
  },
];
