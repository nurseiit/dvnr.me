import moment from 'moment';
import allPosts from '../feed';

export interface PostMeta {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
  description: string;
  tags: string[];
  public: boolean;
}

export interface Post {
  id: string;
  title: string;
  createdAt: moment.Moment;
  updatedAt: moment.Moment;
  description: string;
  tags: string[];
}

function parsePosts(feed: PostMeta[]): Post[] {
  return feed.map((p) => ({
    ...p,
    createdAt: moment(p.createdAt),
    updatedAt: moment(p.updatedAt || p.createdAt),
    tags: p.tags || [],
  }));
}

function filterPublic(feed: PostMeta[]): PostMeta[] {
  return feed.filter((p) => p.public);
}

function sortPosts(feed: Post[]): Post[] {
  feed.sort((a, b) => (a.createdAt.isBefore(b.createdAt) ? 1 : -1));
  return feed;
}

function processPosts(feed: PostMeta[]): Post[] {
  const filteredPosts = filterPublic(feed);
  const parsedPosts = parsePosts(filteredPosts);
  const sortedPosts = sortPosts(parsedPosts);
  return sortedPosts;
}

export function getPosts(): Post[] {
  return processPosts(allPosts);
}

export function findPost(id: string): Post {
  return getPosts().find((p) => p.id === id);
}
