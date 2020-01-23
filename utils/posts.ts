import React from 'react';
import moment from 'moment';
import allPosts from '../feed';

export interface PostMeta {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
  description: string;
  tags: string[];
}

export interface Post {
  id: string;
  title: string;
  createdAt: moment.Moment;
  updatedAt: moment.Moment;
  description: string;
  tags: string[];
  doc: React.ComponentType;
}
/* eslint import/no-dynamic-require: 0 */
/* eslint global-require: 0 */
function requirePost(id: string) {
  return require(`../posts/${id}.mdx`).default;
}

function parsePosts(feed: PostMeta[]): Post[] {
  return feed.map(p => ({
    ...p,
    createdAt: moment(p.createdAt),
    updatedAt: moment(p.updatedAt || p.createdAt),
    tags: p.tags || [],
    doc: requirePost(p.id)
  }));
}

function filterPublic(feed) {
  return feed.filter(p => p.public);
}

function sortPosts(feed) {
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
  return getPosts().find(p => p.id === id);
}
