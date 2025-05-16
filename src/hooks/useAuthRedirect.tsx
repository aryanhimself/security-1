import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthRedirect = (checkLoginStatus: any, redirectPath = "/login") => {
  const router = useRouter();

  useEffect(() => {
    const loginState = checkLoginStatus();
    if (!loginState) {
      router.push(redirectPath);
    }
  }, [checkLoginStatus, router, redirectPath]);
};

export default useAuthRedirect;
