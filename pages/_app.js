import { Global, css } from '@emotion/react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Global styles={css`
        *, *::after, *::before {
          box-sizing: border-box;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          padding: 0;
          margin: 0;
        }

        a {
          text-decoration: none;
        }

        ul {
          list-style: none;
        }
      `}
      />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
