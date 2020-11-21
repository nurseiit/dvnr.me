import React, { FC, useState } from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Copy } from '@styled-icons/feather';

import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';

const Pre = styled.pre`
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  line-height: 1.5;
  padding: 10px;
  overflow: scroll;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }): string => theme.borderColor};
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

const CopyCode = styled.button`
  background: transparent;
  color: ${({ theme }): string => theme.textColor};
  height: 35px;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }): string => theme.borderColor};
  cursor: pointer;
  &:active {
    background: ${({ theme }): string => theme.borderColor};
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-top: -4rem;
  margin-right: 0.2rem;
`;

const CodeWrapper = styled.div`
  min-width: 125%;
  max-width: 125%;
  margin-left: -12.5%;
  @media (max-width: 875px) {
    max-width: 100%;
    min-width: 100%;
    margin-left: 0;
  }
`;

interface CodeBlockProps {
  children: string;
  className: string;
}

const CodeBlock: FC<CodeBlockProps> = ({
  children,
  className,
}): JSX.Element => {
  const language = className ? className.replace(/language-/, '') : '';
  const { value } = useDarkMode();
  const [copyTitle, setCopyTitle] = useState('Click to copy');

  const onCopy = (): Promise<void> => {
    setCopyTitle('Copied!');
    return navigator.clipboard.writeText(children);
  };
  return (
    <CodeWrapper>
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
      <Flex>
        <CopyCode title={copyTitle} onClick={onCopy}>
          <Copy size="15px" />
        </CopyCode>
      </Flex>
    </CodeWrapper>
  );
};

export default CodeBlock;
