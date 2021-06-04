/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const linkItem = css`margin: 0 2rem;`;
const link = css`color: #ff00cc; padding: 0.5rem 1rem;`;

const Nav = ({ user }) => {
  return (
    <nav>
      <ul css={css`
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
      `}
      >
        <li css={linkItem}>
          <a css={link}
          href="/"
          >
            Home
          </a>
        </li>
        <li css={linkItem}>
          <a css={link}
          href={`/profile/${user?.nickname ?? '_'}`}
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;