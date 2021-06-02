import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
  handleProfile
} from '@auth0/nextjs-auth0';

const afterCallback = (req, res, session, state) => {
  // user is located in session
  session.user.favoriteFood = 'pizza';
  return session;
};

//Use this to store additional state for the user before they visit the Identity Provider to login.
const getLoginState = (req, loginOptions) => {
  console.log(loginOptions.authorizationParams.scope); // access scope
  return {}; // custom state value must be an object
};

// Use this to add or remove claims on session updates
const afterRefetch = (req, res, session) => {};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (err) {
        res.status(err.status ?? 500).end(err.message)
    }
  },
  async logout(req, res) {
    try {
      await handleLogout(req, res);
    } catch (err) {
        res.status(err.status ?? 500).end(err.message)
    }
  },
  async login(req, res) {
    try {
      await handleLogin(req, res, { getLoginState });
    } catch (err) {
        res.status(err.status ?? 500).end(err.message)
    }
  },
  async me(req, res) {
    try {
      await handleProfile(req, res, { afterRefetch });
    } catch (err) {
        res.status(err.status ?? 500).end(err.message)
    }
  }
});