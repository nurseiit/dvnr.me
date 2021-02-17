const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');

const withMDX = require('@next/mdx')({
  extension: /.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

module.exports = withPlugins([
  withPreact,
  withMDX,
  {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    async redirects() {
      return [
        {
          source: '/posts',
          destination: '/',
          permanent: true,
        },
      ];
    },
    future: { webpack5: true },
  },
]);
