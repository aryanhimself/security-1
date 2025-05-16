"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useRecaptcha } from "@/providers/recaptcha_provider";
import axios from "axios";
import SuccessMsgBox from "@/components/common/SuccessMsgBox";
import { validEmailDomains } from "@/lib/utils";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Prenumele este obligatoriu" })
    .max(50, {
      message: "Prenumele nu poate avea mai mult de 50 de caractere",
    })
    .refine((val) => val.replace(/\s/g, "").length >= 2, {
      message: "Prenumele trebuie să conțină cel puțin 2 caractere non-spațiu",
    })
    .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(val), {
      message: "Prenumele nu trebuie să conțină caractere speciale sau cifre",
    }),
  familyName: z
    .string()
    .min(3, { message: "Numele de familie este obligatoriu" })
    .max(50, {
      message: "Numele de familie nu poate avea mai mult de 50 de caractere",
    })
    .refine((val) => val.replace(/\s/g, "").length >= 2, {
      message:
        "Numele de familie trebuie să conțină cel puțin 2 caractere non-spațiu",
    })
    .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(val), {
      message:
        "Numele de familie nu trebuie să conțină caractere speciale sau cifre",
    }),
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
  subject: z
    .string()
    .min(3, { message: "Subiectul este obligatoriu" })
    .max(100, {
      message: "Subiectul nu poate avea mai mult de 50 de caractere",
    })
    .refine((val) => val.replace(/\s/g, "").length >= 2, {
      message: "Subiectul trebuie să conțină cel puțin 2 caractere non-spațiu",
    })
    .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(val), {
      message: "Subiectul nu trebuie să conțină caractere speciale sau cifre",
    }),
  motivation: z.string().max(100, {
    message: "Motivația nu poate avea mai mult de 50 de caractere",
  }),
});

const SesizariForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { token, setRefreshReCaptcha } = useRecaptcha();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      familyName: "",
      email: "",
      subject: "",
      motivation: "",
    },
    mode: "onChange",
  });
  //   const [captchaError, setCaptchaError] = useState<string | null>(null);
  const onSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);
    setError(null); // Reset error before submission
    try {
      const URL = process.env.NEXT_PUBLIC_URL as string;
      const complaintForm = await axios.post(`${URL}/Complaint`, {
        firstName: data.firstName,
        lastName: data.familyName,
        email: data.email,
        subject: data.subject,
        message: data.motivation,
        recaptchaToken: token,
      });
      setRefreshReCaptcha((r) => !r);

      if (complaintForm) {
        setIsModalOpen(true);
        form.reset();
      }
    } catch (error: any) {
      console.error("API error:", error);
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

  useEffect(() => {
    setRefreshReCaptcha((r) => !r);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} id="application_form">
        <div className="form__group">
          <label>Prenume *</label>
          <input
            type="text"
            placeholder="ex Adrian"
            className="form__control"
            {...form.register("firstName")}
          />
          <ErrorMessage
            errors={form.formState.errors}
            name="firstName"
            render={({ message }) => (
              <span className="error__message">{message}</span>
            )}
          />
        </div>
        <div className="form__group">
          <label>Nume familie *</label>
          <input
            type="text"
            placeholder="ex Popescu"
            className="form__control"
            {...form.register("familyName")}
          />
          <ErrorMessage
            errors={form.formState.errors}
            name="familyName"
            render={({ message }) => (
              <span className="error__message">{message}</span>
            )}
          />
        </div>
        <div className="form__group">
          <label>Email *</label>
          <input
            type="email"
            placeholder="ex nume@mail.com"
            className="form__control"
            {...form.register("email")}
          />
          <ErrorMessage
            errors={form.formState.errors}
            name="email"
            render={({ message }) => (
              <span className="error__message">{message}</span>
            )}
          />
        </div>
        <div className="form__group">
          <label>Subject *</label>
          <input
            type="text"
            className="form__control"
            {...form.register("subject")}
          />
          <ErrorMessage
            errors={form.formState.errors}
            name="subject"
            render={({ message }) => (
              <span className="error__message">{message}</span>
            )}
          />
        </div>
        <div className="form__group">
          <label>Mesaj</label>
          <textarea
            cols={30}
            rows={5}
            className="form__control"
            {...form.register("motivation")}
          />
          <ErrorMessage
            errors={form.formState.errors}
            name="motivation"
            render={({ message }) => (
              <span className="error__message">{message}</span>
            )}
          />
        </div>

        <div
          className="application__form__message__container"
          id="application__form__message__container"
        >
          <div className="application__form__message">
            Multumim, am receptionat mesajul si te vom contacta curand!
          </div>
        </div>
        {/* Display error message if exists */}
        {error && <div className="error__message">{error}</div>}
        {/* {captchaError && <span className="error__message">{captchaError}</span>} */}
        <button
          type="submit"
          className="orange__button application__button application__form__button"
          id="application__form__button"
        >
          {isLoading ? "Se trimite..." : "Trimite"}
        </button>
      </form>
      <SuccessMsgBox
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default SesizariForm;
