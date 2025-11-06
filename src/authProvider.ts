import { AuthProvider } from "react-admin";

const localStorageKey = "react-admin-username";
export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem(localStorageKey, username);
      return Promise.resolve();
    }
    return Promise.reject();
  },
  logout: () => {
    localStorage.removeItem(localStorageKey);
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem(localStorageKey)
      ? Promise.resolve()
      : Promise.reject();
  },
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(localStorageKey);
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
};
