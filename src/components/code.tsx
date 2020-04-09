import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';

interface Props {
  children: string;
  className: string;
}

const Pre = styled.pre`
  padding: 10px;
  overflow: scroll;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }): string => theme.darkBlue};
`;

const CodeBlock = ({ children, className }: Props): JSX.Element => {
  const language = className ? className.replace(/language-/, '') : '';
  const { value } = useDarkMode();
  return (
    <Highlight
      {...defaultProps}
      theme={value ? nightOwl : nightOwlLight}
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
