const TOKEN_KEY = null;

const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

const getToken = () => localStorage.getItem(TOKEN_KEY);

const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export {TOKEN_KEY, isAuthenticated, getToken, login, logout}