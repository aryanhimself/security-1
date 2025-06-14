"use client";
import { PASSWORD } from "@/config/login";
import { setLogin } from "@/lib/utils";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import { useAuth } from "@/providers/auth_provider";
import { useRouter } from "next/navigation";

const Page = () => {
  const auth = useAuth();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      password: "",
    },
  });

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push("/");
    }
  }, [auth.isLoggedIn, router]);

  const onSubmit = form.handleSubmit((data) => {
    if (data.password === PASSWORD) {
      auth.login();
      router.push("/");
    } else {
      form.setError("password", { message: "Password is not correct" });
    }
  });
  return (
    <div id="login__page">
      <section className="login__section padding__style" id="login__section">
        <div className="container">
          <div className="login__container">
            <h1 className="text__highliter">Log in</h1>
            <h2 style={{ marginTop: "20px" }}>Introduceți o parolă validă</h2>
            <form onSubmit={onSubmit} id="login__form">
              <div className="form__group">
                <label htmlFor="Email *">Parola *</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="password"
                    placeholder="ex Parola"
                    className="form__control"
                    id="login__input"
                    {...form.register("password")}
                    required
                  />
                  <div className="see__password_btn" id="see__password_btn">
                    <div className="password__close" id="password__close">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Image</title>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.53 1.53C18.6625 1.38782 18.7346 1.19978 18.7312 1.00548C18.7277 0.811175 18.649 0.62579 18.5116 0.488377C18.3742 0.350964 18.1888 0.272252 17.9945 0.268824C17.8002 0.265396 17.6122 0.337519 17.47 0.469999L1.47 16.47C1.39631 16.5387 1.33721 16.6215 1.29622 16.7135C1.25523 16.8055 1.23319 16.9048 1.23141 17.0055C1.22963 17.1062 1.24816 17.2062 1.28588 17.2996C1.3236 17.393 1.37974 17.4778 1.45096 17.549C1.52218 17.6203 1.60702 17.6764 1.7004 17.7141C1.79379 17.7518 1.89382 17.7704 1.99452 17.7686C2.09523 17.7668 2.19454 17.7448 2.28654 17.7038C2.37854 17.6628 2.46134 17.6037 2.53 17.53L5.377 14.683C6.744 15.327 8.317 15.75 10 15.75C12.684 15.75 15.09 14.673 16.82 13.345C17.687 12.68 18.403 11.938 18.909 11.209C19.401 10.5 19.75 9.723 19.75 9C19.75 8.277 19.4 7.5 18.909 6.791C18.403 6.062 17.687 5.321 16.821 4.655C16.558 4.454 16.281 4.258 15.989 4.072L18.53 1.53ZM14.9 5.161L13.129 6.932C13.6065 7.65313 13.82 8.51714 13.7334 9.37766C13.6468 10.2382 13.2655 11.0423 12.6539 11.6539C12.0423 12.2655 11.2382 12.6468 10.3777 12.7334C9.51714 12.82 8.65313 12.6065 7.932 12.129L6.515 13.545C7.62015 14.0032 8.80367 14.2426 10 14.25C12.287 14.25 14.38 13.327 15.907 12.155C16.669 11.57 17.271 10.937 17.677 10.354C18.096 9.75 18.25 9.277 18.25 9C18.25 8.723 18.096 8.25 17.677 7.646C17.271 7.063 16.669 6.43 15.907 5.845C15.594 5.605 15.258 5.375 14.9 5.161ZM9.03 11.031C9.44986 11.2315 9.92156 11.2969 10.3802 11.2183C10.8387 11.1396 11.2617 10.9207 11.5907 10.5917C11.9197 10.2627 12.1386 9.83974 12.2173 9.38115C12.2959 8.92256 12.2305 8.45086 12.03 8.031L9.03 11.031Z"
                          fill="black"
                        />
                        <path
                          d="M10 2.25C11.032 2.25 12.024 2.41 12.951 2.681C12.9916 2.69311 13.0283 2.71562 13.0575 2.74629C13.0867 2.77697 13.1074 2.81474 13.1175 2.85588C13.1276 2.89701 13.1268 2.94007 13.1151 2.98078C13.1035 3.0215 13.0814 3.05846 13.051 3.088L12.227 3.913C12.1964 3.94335 12.1586 3.96543 12.1172 3.97715C12.0757 3.98887 12.0319 3.98985 11.99 3.98C11.3375 3.82845 10.6699 3.75129 10 3.75C7.713 3.75 5.62 4.673 4.093 5.845C3.331 6.43 2.729 7.063 2.323 7.646C1.904 8.25 1.75 8.723 1.75 9C1.75 9.277 1.904 9.75 2.323 10.354C2.677 10.864 3.181 11.411 3.811 11.931C3.927 12.026 3.938 12.201 3.831 12.308L3.123 13.017C3.07964 13.061 3.02132 13.087 2.95962 13.09C2.89793 13.093 2.83738 13.0726 2.79 13.033C2.14617 12.5021 1.57494 11.8888 1.091 11.209C0.6 10.5 0.25 9.723 0.25 9C0.25 8.277 0.6 7.5 1.091 6.791C1.597 6.062 2.313 5.321 3.179 4.655C4.91 3.327 7.316 2.25 10 2.25Z"
                          fill="black"
                        />
                        <path
                          d="M10 5.25C10.118 5.25 10.236 5.255 10.351 5.266C10.548 5.285 10.619 5.52 10.48 5.66L9.26701 6.872C8.94401 6.98367 8.6506 7.16727 8.40894 7.40893C8.16728 7.65059 7.98368 7.944 7.87201 8.267L6.66001 9.48C6.52001 9.62 6.28501 9.548 6.26601 9.351C6.21714 8.8312 6.27735 8.30693 6.44278 7.81174C6.60822 7.31655 6.87523 6.86137 7.22673 6.47532C7.57822 6.08928 8.00646 5.78089 8.48401 5.56989C8.96156 5.35889 9.47792 5.24994 10 5.25Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="password__open" id="password__open">
                      <svg
                        width="24"
                        height="16"
                        viewBox="0 0 24 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Image</title>
                        <path
                          d="M23.0137 8.22781C22.9819 8.30094 22.2019 10.0306 20.46 11.7725C18.8437 13.3869 16.0669 15.3125 12 15.3125C7.93311 15.3125 5.15623 13.3869 3.53998 11.7725C1.79811 10.0306 1.01811 8.30375 0.986235 8.22781C0.954184 8.15581 0.937622 8.07788 0.937622 7.99906C0.937622 7.92025 0.954184 7.84232 0.986235 7.77031C1.01811 7.69813 1.79811 5.96844 3.53998 4.22656C5.15623 2.61219 7.93311 0.6875 12 0.6875C16.0669 0.6875 18.8437 2.61219 20.46 4.22656C22.2019 5.96844 22.9819 7.69531 23.0137 7.77031C23.0458 7.84232 23.0623 7.92025 23.0623 7.99906C23.0623 8.07788 23.0458 8.15581 23.0137 8.22781ZM12 1.8125C9.05811 1.8125 6.48936 2.88312 4.36405 4.99344C3.47312 5.87886 2.7192 6.89219 2.12717 8C2.71903 9.10763 3.47297 10.1207 4.36405 11.0056C6.48936 13.1169 9.05811 14.1875 12 14.1875C14.9419 14.1875 17.5106 13.1169 19.6359 11.0056C20.527 10.1207 21.2809 9.10763 21.8728 8C21.2756 6.85531 18.2812 1.8125 12 1.8125ZM12 12.3125C11.1471 12.3125 10.3133 12.0596 9.60409 11.5857C8.8949 11.1118 8.34216 10.4383 8.01575 9.65032C7.68935 8.86232 7.60395 7.99522 7.77035 7.15867C7.93675 6.32213 8.34747 5.55372 8.95059 4.9506C9.5537 4.34749 10.3221 3.93676 11.1587 3.77036C11.9952 3.60397 12.8623 3.68937 13.6503 4.01577C14.4383 4.34217 15.1118 4.89492 15.5857 5.6041C16.0596 6.31329 16.3125 7.14707 16.3125 8C16.311 9.14329 15.8562 10.2393 15.0477 11.0478C14.2393 11.8562 13.1433 12.311 12 12.3125ZM12 4.8125C11.3696 4.8125 10.7533 4.99944 10.2291 5.34969C9.70492 5.69994 9.29637 6.19776 9.05512 6.7802C8.81387 7.36264 8.75074 8.00354 8.87373 8.62185C8.99672 9.24016 9.3003 9.80812 9.74608 10.2539C10.1919 10.6997 10.7598 11.0033 11.3781 11.1263C11.9964 11.2492 12.6373 11.1861 13.2198 10.9449C13.8022 10.7036 14.3 10.2951 14.6503 9.77088C15.0005 9.2467 15.1875 8.63043 15.1875 8C15.1875 7.15462 14.8517 6.34387 14.2539 5.7461C13.6561 5.14833 12.8454 4.8125 12 4.8125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="error__message" id="error__message" />
              </div>
              <button className="orange__button login__button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
