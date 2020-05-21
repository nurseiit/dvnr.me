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
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  line-height: 1.5;
  padding: 10px;
  overflow: scroll;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
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
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading, react/no-array-index-key
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
