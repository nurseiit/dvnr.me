const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx']
});
