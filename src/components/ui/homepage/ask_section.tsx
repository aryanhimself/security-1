import React, { useRef, useState } from "react";
import "./ask_section.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import SuccessMsgBox from "@/components/common/SuccessMsgBox";
import { useRecaptcha } from "@/providers/recaptcha_provider";
import { validEmailDomains } from "@/lib/utils";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "E-mailul este obligatoriu." }) // First validation
    .refine((email) => email.includes("@"), {
      message: "Vă rugăm să includeți @ în adresa de e-mail.",
    })
    .refine(
      (email) => {
        const parts = email.split("@");
        return parts.length === 2 && parts[1].length > 0; // Ensures something after "@"
      },
      { message: "În adresă lipsește un destinatar." }
    )
    .refine(
      (val) => {
        const domain = val.split("@")[1];
        return validEmailDomains.includes(domain);
      },
      { message: "Vă rugăm să introduceți un e-mail cu un domeniu valid" }
    ),

  msg: z
    .string()
    .min(1, { message: "Mesajul este obligatoriu" })
    .max(1000, { message: "Maxim 1000 de caractere permise" }),
});

type FormData = z.infer<typeof formSchema>;

const AskSection = () => {
  const { token, setRefreshReCaptcha } = useRecaptcha();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      msg: "",
    },
    mode: "onChange",
  });
  const onSubmit = handleSubmit(async (data: FormData) => {
    setIsLoading(true);
    setError(null); // Reset error before submission
    try {
      const URL = process.env.NEXT_PUBLIC_URL as string;

      const askQuestion = await axios.post(`${URL}/AskAQuestion`, {
        email: data.email,
        question: data.msg,
      });
      setRefreshReCaptcha((r) => !r);
      if (askQuestion) {
        reset();
        setIsModalOpen(true);
        setIsLoading(false);
      }
    } catch (error: any) {
      // Check if the error is a server error (status 500)
      if (error.response && error.response.status === 500) {
        setError("Something went wrong on our end. Please try again later.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  });
  const handleclick = () => {
    if (Object.keys(errors).length > 0 || formRef.current) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      if (Object.keys(errors)[0] === "file") {
        setTimeout(() => {
          window.scrollBy(0, -100);
        }, 300);
      }
    }
  };
  return (
    <section
      className="ask__section padding__style"
      id="ask__section"
      ref={formRef}
    >
      <div className="container">
        <div className="ask__form__container relative">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="mt-7">Întreabă orice</h1>
            <h2 className="">și îți vom răspunde imediat!</h2>
          </div>
          <form className="ask__form" id="ask__form" onSubmit={onSubmit}>
            <div className="form__group">
              <label htmlFor="Email *">Email *</label>
              <input
                type="email"
                placeholder="ex nume@mail.com"
                className="form__control"
                {...register("email")}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className="error__message">{message}</p>
                )}
              />
            </div>
            <div className="form__group">
              <label htmlFor="Intrebarea ta *">Întrebarea ta *</label>
              <textarea
                cols={30}
                rows={5}
                className="form__control"
                {...register("msg")}
              />
              <span className="form__message">max 1000 caractere</span>
              <ErrorMessage
                errors={errors}
                name="msg"
                render={({ message }) => (
                  <p className="error__message">{message}</p>
                )}
              />
            </div>
            <div
              className="application__form__message__container"
              id="ask__form__message__container"
            >
              <div className="application__form__message">
                Multumim, am receptionat mesajul si te vom contacta curand!
              </div>
            </div>
            {error && <div className="error__message">{error}</div>}

            <button
              type="submit"
              onClick={handleclick}
              className="orange__button application__button ask__form__button"
            >
              {isLoading ? "Se trimite..." : "Expediază"}
            </button>
          </form>
          <SuccessMsgBox
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default AskSection;
