/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

import AuthLink from '../../components/AuthLink';
import Nav from '../../components/Nav';

const profileItem = css`margin: 2rem 0`;

export default function Profile({ user }) {
  return (
     <div css={css`
      align-items: center;
      background: #40E0D0;
      background: -webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
      background: linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);

      display: flex;
      height: 100vh;
      justify-content: center;
    `}
    >
      <div css={css`
      background-color: #fff;
      border-radius: 1rem;
      padding: 4rem 8rem;
      text-align: center;
      `}
      >
        <Nav user={user} />
        <h2 css={css`margin: 2rem 0`}>Welcome to your profile {user.name}</h2>
        {user &&
          <img
          alt="user avatar"
          css={css`
          border-radius: 0.5rem
          `}
          src={user.picture}
          />
        }
        <ul css={css`margin-bottom: 2rem`}>
        {user.given_name ? <li css={profileItem}>First name: {user.given_name}</li> : null}
        {user.family_name ? <li css={profileItem}>Family name: {user.family_name}</li> : null}
        {user.nickname ? <li css={profileItem}>Nickname: {user.nickname}</li> : null}
        {user.favoriteFood ? <li css={profileItem}>Favorite Food: {user.favoriteFood}</li> : null}
        </ul>
        <AuthLink path="/api/auth/logout">Sign Out</AuthLink>
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { req, res, query } = ctx;
    const { profile } = query;
    const session = getSession(req, res);

    if (profile !== session.user.nickname) {
      return {
        redirect: {
          destination: `/profile/${session.user.nickname}`
        }
      }
    }

    return {
      props: {}
    };
  }
});