import auth from '../services/auth';
import {useMemo} from 'react';

const AuthProvider = useMemo(() => ({
  login: auth.login,
  signup: auth.signup,
  logout: auth.logout,
  getAuthState: auth.getAuthState,
}));

export default AuthProvider;
