import React, { FC } from 'react';
import { findPost } from '../utils/posts';

interface ShareButtonsProps {
  id: string;
}

const ShareButtons: FC<ShareButtonsProps> = ({ id }) => {
  // should handle # cases separately for twitter to work
  const encodedTitle = encodeURI(findPost(id).title).replace(/#/g, '%23');
  return (
    <div>
      <a
        className="resp-sharing-button__link"
        href={`https://reddit.com/submit/?url=https%3A%2F%2Fdvnr.me%2Fposts%2F${id}&resubmit=true&title=${encodedTitle}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Share on Reddit"
      >
        <div className="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--small">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z" />
            </svg>
          </div>
        </div>
      </a>

      <a
        className="resp-sharing-button__link"
        href={`https://twitter.com/intent/tweet/?text=${encodedTitle}&url=https%3A%2F%2Fdvnr.me%2Fposts%2F${id}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label=""
      >
        <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
            </svg>
          </div>
        </div>
      </a>

      <a
        className="resp-sharing-button__link"
        href={`http://vk.com/share.php?title=${encodedTitle}&url=https%3A%2F%2Fdvnr.me%2Fposts%2F${id}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label=""
      >
        <div className="resp-sharing-button resp-sharing-button--vk resp-sharing-button--small">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z" />
            </svg>
          </div>
        </div>
      </a>

      <style jsx>{`
        .resp-sharing-button__link,
        .resp-sharing-button__icon {
          display: inline-block;
        }

        .resp-sharing-button__link {
          text-decoration: none;
          color: #fff;
          margin: 0.5em 1em 0.5em 0;
        }

        .resp-sharing-button {
          border-radius: 0.5rem;
          transition: 25ms ease-out;
          padding: 0.2em 0.5em;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        }

        .resp-sharing-button__icon svg {
          width: 1.35em;
          height: 1.35em;
        }

        .resp-sharing-button--small svg {
          margin: 0;
          vertical-align: middle;
        }

        /* Solid icons get a fill */
        .resp-sharing-button__icon--solid,
        .resp-sharing-button__icon--solidcircle {
          fill: #fff;
          stroke: none;
        }

        .resp-sharing-button--reddit {
          background-color: #ff5700;
          border-color: #ff5700;
        }

        .resp-sharing-button--reddit:hover,
        .resp-sharing-button--reddit:active {
          background-color: #ff4500;
          border-color: #ff4500;
        }

        .resp-sharing-button--twitter {
          background-color: #55acee;
          border-color: #55acee;
        }

        .resp-sharing-button--twitter:hover,
        .resp-sharing-button--twitter:active {
          background-color: #2795e9;
          border-color: #2795e9;
        }

        .resp-sharing-button--vk {
          background-color: #507299;
          border-color: #507299;
        }

        .resp-sharing-button--vk:hover,
        .resp-sharing-button--vk:active {
          background-color: #43648c;
          border-color: #43648c;
        }
      `}</style>
    </div>
  );
};

export default ShareButtons;
