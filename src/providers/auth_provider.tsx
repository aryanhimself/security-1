"use client";
import { getLoginStatus, setLogout, setLogin } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Loader from "react-spinners/PropagateLoader";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: () => void;
  setLogOut: () => void;
}>({
  isLoggedIn: false,
  setLogOut: () => {},
  login: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const setLogOut = () => {
    setLoggedIn(false);
    setLogout();
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setIsClient(true);
    const loginState = getLoginStatus();
    setLoggedIn(() => loginState);
    setLoading(false);
    if (!loginState) {
      router.push("/login");
    }
  }, [router, isLoggedIn]);
  const login = () => {
    setLoggedIn(true);
    setLogin();
  };

  if (isClient) {
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn,
          login,
          setLogOut,
        }}
      >
        <ProgressBar color="#FCD116" />
        {loading && <CenterLoader />}
        {isClient ? children : <CenterLoader />}
      </AuthContext.Provider>
    );
  }
  return <CenterLoader />;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
import React from "react";

const CenterLoader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader color="#FCD116" />
    </div>
  );
};
