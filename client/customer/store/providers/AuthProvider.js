import auth from '../services/auth';

const AuthProvider = {
  login: auth.login,
  signup: auth.signup,
  logout: auth.logout,
  getAuthState: auth.getAuthState,
};

export default AuthProvider;
