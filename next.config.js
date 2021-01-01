const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

const withMDX = require('@next/mdx')({
  extension: /.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

module.exports = withMDX({
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
});
