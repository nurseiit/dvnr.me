import { compareDesc } from 'date-fns';
import * as posts from '../posts';
import allPosts from '../../feed';

jest.mock('../../feed');

describe('getPosts', () => {
  test('only returns public posts', () => {
    const getPosts = posts.getPosts();
    const privatePosts = getPosts.filter((post: posts.Post) => !post.public);
    expect(privatePosts).toHaveLength(0);
  });

  test('posts are sorted by date descending', () => {
    const getPosts = posts.getPosts();
    const sortedPosts = getPosts.sort((a, b) =>
      compareDesc(a.createdAt, b.createdAt)
    );
    expect(getPosts).toEqual(sortedPosts);
  });
});

describe('getPostsAll', () => {
  test('returns both public and private posts', () => {
    const getPostsAll = posts.getPostsAll();
    const privatePosts = getPostsAll.filter((post: posts.Post) => !post.public);
    expect(getPostsAll).not.toHaveLength(0);
    expect(privatePosts).not.toHaveLength(0);
  });

  test('posts are sorted by date descending', () => {
    const getPostsAll = posts.getPostsAll();
    const sortedPosts = getPostsAll.sort((a, b) =>
      compareDesc(a.createdAt, b.createdAt)
    );
    expect(getPostsAll).toEqual(sortedPosts);
  });
});

describe('findPost', () => {
  test('returns a valid post, public and private', () => {
    allPosts.forEach(({ id }) => {
      const findPost = posts.findPost(id);
      expect(findPost).not.toBeUndefined();
    });
  });
});
