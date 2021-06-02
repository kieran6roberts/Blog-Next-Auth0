/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const AuthLinkStyles = css`
  background-color: #ff00cc;
  border: 1px solid #ff00cc;
  border-radius: 0.5rem;
  color: #fff;
  display: block;
  margin: auto;
  padding: 1rem 2rem;
  width: max-content;
`;

const AuthLink = ({ children, path }) => (
  <a css={AuthLinkStyles} href={path}>{children}</a>
);

export default AuthLink;