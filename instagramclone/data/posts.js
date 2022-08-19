import { USERS } from './users';

export const POSTS = [
  {
    id: 1,
    imageUrl:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/15951/production/_117310488_16.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Upside-down',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Micheal Lyons',
        comment: 'Love this!',
      },
      {
        user: 'Quintin Ed',
        comment: 'agreed',
      },
    ],
  },
  {
    id: 2,
    imageUrl:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/15C0D/production/_117310198_03.jpg',
    user: USERS[2].user,
    likes: 7870,
    caption: 'Gotta go fast!',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'xearwalker',
        comment: 'Fantastic build!',
      },
      {
        user: 'xearwalkerrrrrr',
        comment: 'Good job',
      },
    ],
  },
  {
    id: 3,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51eqas1hTKL._SX403_BO1,204,203,200_.jpg',
    user: USERS[6].user,
    likes: 7870,
    caption: 'Gotta go fast!!!!',
    profile_picture: USERS[6].image,
    comments: [
      {
        user: 'xearwalker',
        comment: 'Fantastic build!!!!!!',
      },
      {
        user: 'xearwalkerrrrrr',
        comment: 'Good job!!!!',
      },
    ],
  },
];
