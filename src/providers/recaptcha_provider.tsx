"use client";
import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

const RecaptchaContext = createContext<{
  token: string;
  setRefreshReCaptcha: Dispatch<SetStateAction<boolean>>;
}>({
  token: "",
  setRefreshReCaptcha: () => {},
});

const RecaptchaProvider: FC<PropsWithChildren> = ({ children }) => {
  const sitekey = process.env.NEXT_PUBLIC_SITE_KEY as string;
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const onVerify = useCallback((token: string) => {
    setToken(token);
  }, []);
  return (
    <RecaptchaContext.Provider
      value={{
        token,
        setRefreshReCaptcha,
      }}
    >
      <GoogleReCaptchaProvider reCaptchaKey={sitekey}>
        {children}
        <GoogleReCaptcha
          onVerify={onVerify}
          refreshReCaptcha={refreshReCaptcha}
        />
      </GoogleReCaptchaProvider>
    </RecaptchaContext.Provider>
  );
};

export default RecaptchaProvider;

export const useRecaptcha = () => useContext(RecaptchaContext);
