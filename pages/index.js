/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { getSession } from '@auth0/nextjs-auth0';

import AuthLink from '../components/AuthLink';
import Nav from '../components/Nav';

export default function Home({ user }) {
  return (
    <div css={css`
      align-items: center;
      background: #ff00cc;
      background: -webkit-linear-gradient(to right, #333399, #ff00cc);
      background: linear-gradient(to right, #333399, #ff00cc);
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
        <h2 css={css`
          margin: 2rem 0;
        `}
        >
          {user?.name ?? 'Welcome User'}
        </h2 >
        <p css={css`
          margin-top: 2rem;
          margin-bottom: 3rem;
        `}
        >
          {user ? `It's great to have you here${user.given_name ? ` ${user.given_name}!!` : '!!'}` : 'I bet you would like to sign in to our app right? Click the Sign in button below'}
        </p>
        <div>
          {user ?
            <AuthLink path="/api/auth/logout">Sign Out</AuthLink>
          :
            <AuthLink path="/api/auth/login">Sign In</AuthLink>
          }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  const session = getSession(req, res);
  console.log(session)

  return {
    props: { user: session?.user ?? null }
  }
}
