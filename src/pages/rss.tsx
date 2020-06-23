import React from 'react';
import { NextPageContext } from 'next';
import { getPosts } from '../utils/posts';

const getRssXml = (): string => {
  const posts = getPosts();
  const latestPostDate = posts[0].createdAt;
  const postsRssXml = posts
    .map(
      (post) => `
        <item>
          <title>${post.title}</title>
          <link>
            https://devnur.me/posts/${post.id}
          </link>
          <pubDate>${post.createdAt}</pubDate>
          <description>
          <![CDATA[${post.description}]]>
          </description>
        </item>`
    )
    .join('');

  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>devnur – inspirations by Nurseiit A.</title>
        <link>https://devnur.me</link>
        <description>🚁 /dev/nur – a minimalist blog built with Next.js.</description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${postsRssXml}
    </channel>
  </rss>`;
};

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext): Promise<void> {
    if (res) {
      res.setHeader('Content-Type', 'text/xml');
      res.write(getRssXml());
      res.end();
    }
  }
}
