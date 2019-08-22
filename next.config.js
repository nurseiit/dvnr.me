const images = require('remark-images');
const emoji = require('remark-emoji');

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [images, emoji]
  }
});

module.exports = withMDX();
