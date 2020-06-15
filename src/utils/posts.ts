import { compareAsc } from 'date-fns';
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
  createdAt: Date;
  updatedAt: Date;
  description: string;
  tags: string[];
}

function parsePosts(feed: PostMeta[]): Post[] {
  return feed.map((p) => ({
    ...p,
    createdAt: new Date(p.createdAt),
    updatedAt: new Date(p.updatedAt || p.createdAt),
    tags: p.tags || [],
  }));
}

function filterPublic(feed: PostMeta[]): PostMeta[] {
  return feed.filter((p) => p.public);
}

function sortPosts(feed: Post[]): Post[] {
  feed.sort((a, b) => compareAsc(a, b));
  return feed;
}

function processPosts(feed: PostMeta[]): Post[] {
  const filteredPosts = filterPublic(feed);
  const parsedPosts = parsePosts(filteredPosts);
  const sortedPosts = sortPosts(parsedPosts);
  return sortedPosts;
}

// only public posts
export function getPosts(): Post[] {
  return processPosts(allPosts);
}

function processPostsAll(feed: PostMeta[]): Post[] {
  const parsedPosts = parsePosts(feed);
  const sortedPosts = sortPosts(parsedPosts);
  return sortedPosts;
}

export function getPostsAll(): Post[] {
  return processPostsAll(allPosts);
}

export function findPost(id: string): Post {
  return getPostsAll().find((p) => p.id === id);
}
