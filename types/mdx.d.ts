// types/mdx.d.ts
declare module '*.mdx' {
  const MDXComponent: (props) => JSX.Element;
  export const title: string;
  export const author: string;
  export default MDXComponent;
}
