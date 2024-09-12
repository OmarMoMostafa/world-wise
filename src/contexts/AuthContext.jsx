/*eslint-disable */

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(false);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setUser(FAKE_USER);
      setIsLogedIn(true);
    } else {
      alert("email or password is incorrect");
    }
  }

  function logout() {
    setIsLogedIn(false);
    setUser({});
  }

  return (
    <AuthContext.Provider value={{ user, isLogedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
