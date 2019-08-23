// types/mdx.d.ts
declare module '*.mdx' {
  const MDXComponent: (props) => JSX.Element;
  export const details: import('../utils/details');
  export default MDXComponent;
}
