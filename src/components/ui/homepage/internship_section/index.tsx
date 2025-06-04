import React, { useState } from "react";
import "./Section7.css";
import TestimonialCard from "./TestimonialCard";
import HorizontalLine from "@/components/common/HorizontalLine";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import SuccessMsgBox from "@/components/common/SuccessMsgBox";
import { validEmailDomains } from "@/lib/utils";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Prenumele este obligatoriu" })
    .max(50, { message: "Prenumele nu poate avea mai mult de 50 de caractere" })
    .refine((val) => val.replace(/\s/g, "").length >= 2, {
      message: "Prenumele trebuie să conțină cel puțin 2 caractere non-spațiu",
    })
    .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(val), {
      message: "Prenumele nu trebuie să conțină caractere speciale sau cifre",
    }),
  lastName: z
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
  initials: z
    .string()
    .max(10, {
      message: "Inițialele trebuie să conțină cel mult 10 caractere",
    })
    .refine((val) => val.replace(/\s/g, "").length >= 2, {
      message: "Inițialele trebuie să conțină cel puțin 2 caractere non-spațiu",
    })
    .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(val), {
      message: "Inițialele trebuie să conțină doar litere și spații",
    }),
});
const INTERNSHIP_SECTION_DATA = {
  id: "internship__section",
  heading: "DECIDE",
  subHeading: "Remarcă-te în stagii!",
  bannerTitle: "Stagii de practică în SIE",
  bannerDescription:
    "În colaborare cu mediul universitar, organizăm în fiecare an programe de practică în domeniul Criptologiei. Completează formularul pentru a afla mai multe.",
  testimonialData: [
    {
      id: "1",
      testimonial:
        "…acest stagiu m-a prins între un final (cel al facultății, susținerea licenței) și un început, cel al recrutării în această instituție, care îmi doresc să fie în favoarea dorinței mele. Pe scurt, a fost un beneficiu atât personal, prin prisma oamenilor, cât și profesional, din perspectiva informațiilor acumulate și a începutului recrutării.",
      title: "Stagiar 2024",
    },
    {
      id: "2",
      testimonial:
        "Organizarea a fost foarte bună, profesorii au fost mereu pregătiți și dornici să ne ajute atunci când aveam o problemă. Am descoperit ce înseamnă Criptologia și am aprofundat unele concepte pe care le mai știam. A fost o experiență plăcută pe care aș mai repeta-o.",
      title: "Stagiar 2024",
    },
    {
      id: "3",
      testimonial:
        "Am putut interacționa cu oameni calzi și primitori, persoane care te ajută când nu știi și încearcă să facă totul interactiv și amuzant pentru noi. Nu numai interacțiunea cu specialiștii a fost plăcută, dar și cea cu prietenii pe care am reușit să mi-i fac în cele 4 săptămâni de stagiu.",
      title: "Stagiar 2023",
    },
    {
      id: "4",
      testimonial:
        "Acest domeniu m-a fascinat. Chiar dacă este greu, te ține în mod constant într-o stare de evoluție continuă. Mi-a plăcut foarte mult și m-a făcut să-mi întrec limitele, prin toate subiectele abortitle, teme, provocări. Cred că mi-ar plăcea să descopăr cât mai multe despre acest domeniu.",
      title: "Stagiar 2022",
    },
  ],
};
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  initials: string;
};

const InternshipSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    bannerDescription,
    bannerTitle,
    heading,
    id,
    subHeading,
    testimonialData,
  } = INTERNSHIP_SECTION_DATA;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      initials: "",
    },
    mode: "onChange",
  });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    setError(null); // Reset error before submission
    try {
      const URL = process.env.NEXT_PUBLIC_URL as string;

      const getInform = await axios.post(`${URL}/InformNextStage`, data);

      if (getInform) {
        setIsLoading(false);
        setIsModalOpen(true);
        reset();
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
  return (
    <section className="internship__section padding__style" id={id}>
      <div className="flex flex__col item-center">
        <HorizontalLine heading={heading} subHeading={subHeading} />
        <div className="internship__banner">
          <div className="container flex flex__col item-center">
            <h1 className="banner__title">{bannerTitle}</h1>
            <p className="banner__paragraph">{bannerDescription}</p>
          </div>
        </div>
        <div className="container">
          <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {testimonialData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial.testimonial}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>

        <div className="container">
          <div className="send__message__form border relative">
            <div className="p-0 md:p-12">
              <h1>
                Completează formularul dacă dorești să fii informat despre
                următorul stagiu de pregătire
              </h1>
              <form
                onSubmit={onSubmit}
                className="flex flex__col item-center"
                id="message__form"
              >
                <div className="message__form flex flex-wrap item-center">
                  <div className="form__group" id="internship_form_group">
                    <label htmlFor="firstname">Prenume *</label>
                    <input
                      type="text"
                      className="form__control"
                      {...register("firstName")}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="firstName"
                      render={({ message }) => (
                        <p className="error__message">{message}</p>
                      )}
                    />
                  </div>
                  <div className="form__group" id="internship_form_group">
                    <label htmlFor="name">Nume *</label>
                    <input
                      type="text"
                      className="form__control"
                      {...register("lastName")}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="lastName"
                      render={({ message }) => (
                        <p className="error__message">{message}</p>
                      )}
                    />
                  </div>
                  <div className="form__group" id="internship_form_group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
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
                  <div className="form__group" id="internship_form_group">
                    <div style={{ position: "relative" }}>
                      <label htmlFor="email">Initiale *</label>
                      <p style={{ fontSize: "10px" }}>
                        (Primele litere ale numelui si prenumelui, ex: P M)
                      </p>
                    </div>
                    <input
                      type="text"
                      className="form__control"
                      {...register("initials")}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="initials"
                      render={({ message }) => (
                        <p className="error__message">{message}</p>
                      )}
                    />
                  </div>
                </div>
                {error && <div className="error__message">{error}</div>}
                <button
                  type="submit"
                  className="message__button button"
                  id="message__button"
                >
                  {isLoading ? "Se trimite..." : "Expediază Mesajul"}
                </button>
                <div
                  className="send__form__message__container"
                  id="send__form__message__container"
                >
                  <div className="application__form__message">
                    Multumim, am receptionat mesajul si te vom contacta curand!
                  </div>
                </div>
              </form>
            </div>
            <SuccessMsgBox
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
