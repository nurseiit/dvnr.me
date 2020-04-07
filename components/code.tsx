import React from 'react';
import styled from 'styled-components';

import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

interface Props {
  children: string;
  className: string;
}

const Pre = styled.pre`
  padding: 10px;
  overflow: scroll;
  font-size: 0.8rem;
`;

const CodeBlock = ({ children, className }: Props): JSX.Element => {
  const language = className ? className.replace(/language-/, '') : '';
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwl}
      code={children.trim()}
      language={language as Language}
    >
      {({
        className: _className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }): JSX.Element => (
        <Pre className={_className} style={{ ...style }}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-props-no-spreading, react/no-array-index-key
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-props-no-spreading, react/no-array-index-key
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
