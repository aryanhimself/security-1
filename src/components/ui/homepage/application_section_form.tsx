import React, { useCallback, useRef, useState } from "react";
import "@/app/sesizari/application.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRecaptcha } from "@/providers/recaptcha_provider";
import InputMask from "react-input-mask";
import SuccessMsgBox from "@/components/common/SuccessMsgBox";
import { CircleCheckBig } from "lucide-react";
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

  telephone: z
    .string()
    .regex(/^[0-9]+$/, {
      message: "Telefonul trebuie să conțină doar cifre",
    })
    .min(10, { message: "Telefonul trebuie să aibă 10 caractere" })
    .max(15, { message: "Telefonul nu poate avea mai mult de 15 caractere" }),

  date: z
    .string()
    .min(1, { message: "Data nașterii este obligatorie" })
    .refine(
      (val) => {
        const [day, month, year] = val.split("/").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        const minDate = new Date();
        minDate.setFullYear(today.getFullYear() - 45); // Maximum 45 years old
        const maxDate = new Date();
        maxDate.setFullYear(today.getFullYear() - 18); // Minimum 18 years old

        return birthDate >= minDate && birthDate <= maxDate;
      },
      { message: "Trebuie să aveți între 18 și 45 de ani" }
    )
    .refine(
      (val) => {
        const [day, month, year] = val.split("/").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        const futureLimit = new Date();
        futureLimit.setDate(today.getDate() + 200); // Future date limit

        return birthDate <= futureLimit;
      },
      {
        message:
          "Data nașterii nu poate fi cu mai mult de 200 de zile în viitor",
      }
    ),

  position: z
    .string()
    .min(1, { message: "Vă rugăm să selectați un loc de muncă" }),
  file: z
    .any()
    .refine((file) => file[0]?.size <= 15 * 1024 * 1024, {
      message: "Dimensiunea fișierului trebuie să fie mai mică de 15 MB",
    })
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "text/plain",
          "image/jpeg",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file[0]?.type),
      { message: "Tip de fișier invalid" }
    ),

  motivation: z
    .string()
    .min(1, { message: "Mesajul este obligatoriu" })
    .max(1000, { message: "Maxim 1000 de caractere permise" })
    .refine((val) => val.replace(/\s/g, "").length >= 2, {
      message: "Mesajul trebuie să conțină cel puțin 2 caractere non-spațiu",
    }),
});
type FormData = z.infer<typeof formSchema>;

const Section12 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { token, setRefreshReCaptcha } = useRecaptcha();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      familyName: "",
      email: "",
      telephone: "",
      date: "",
      position: "Selecteaza jobul",
      motivation: "",
      file: "",
    },
    shouldFocusError: false,
    mode: "onChange",
  });

  const validateDate = (value: any) => {
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!datePattern.test(value)) {
      return "Invalid date format. Use dd/mm/yyyy.";
    }

    const [day, month, year] = value.split("/").map(Number);

    // Check for valid month
    if (month < 1 || month > 12) {
      return "Invalid month. Please enter a value between 01 and 12.";
    }

    // Check for valid day considering the month
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      return `Invalid day for the given month. Max days: ${daysInMonth}.`;
    }

    // Optionally, you can add more validation for the year if needed
    return true;
  };

  // console.log("validateDate", validateDate("01/33/2023"));
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    setError(null); // Reset error before submission

    let formatDate = data.date;
    const [day, month, year] = formatDate.split("/");

    const fullYear = year.length === 2 ? `20${year}` : year;

    // Format to 'yyyy-mm-dd'
    const formattedDate = `${fullYear}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;

    let isValidDate = validateDate(data.date);
    // console.log("isValidDate", isValidDate);

    if (isValidDate === true) {
      const form = new FormData();
      form.append("FirstName", data.firstName);
      form.append("LastName", data.familyName);
      form.append("Email", data.email);
      form.append("PhoneNumber", data.telephone);
      form.append("DateOfBirth", formattedDate);
      form.append("AppliedFor", data.position);
      form.append("CVFile", data.file[0]);
      form.append("Motivation", data.motivation);
      form.append("RecaptchaToken", token);

      try {
        const URL = process.env.NEXT_PUBLIC_URL as string;

        setRefreshReCaptcha((r) => !r);
        const applyForm = await axios.post(`${URL}/Apply`, form);
        if (applyForm) {
          setIsModalOpen(true);
          setIsLoading(false);

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
    } else {
      setError("Invalid date format. Use dd/mm/yyyy.");
      setIsLoading(false);
    }
  });

  watch("file");
  // console.log("first", watch("date"));

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
    <>
      <section
        className="applicationform__section padding__style bg-white relative"
        id="formular-de-aplicare"
        ref={formRef}
      >
        <div className="container">
          <div className="application__form">
            <h1 className="">Formular de Aplicare</h1>
            <form onSubmit={onSubmit} id="application_form">
              <div className="form__group">
                <label htmlFor="Prenume *">Prenume *</label>
                <input
                  type="text"
                  placeholder="ex Adrian"
                  className="form__control"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="form__message !text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="Nume familie *">Nume familie *</label>
                <input
                  type="text"
                  placeholder="ex Popescu"
                  className="form__control"
                  {...register("familyName")}
                />
                {errors.familyName && (
                  <span className="form__message !text-red-500">
                    {errors.familyName.message}
                  </span>
                )}
              </div>
              <div
                className="flex sm:flex-row flex-col item-center"
                style={{ gap: "15px" }}
              >
                <div className="form__group">
                  <label htmlFor="Email *">Email *</label>
                  <input
                    type="email"
                    placeholder="ex nume@mail.com"
                    className="form__control"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="form__message !text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="form__group">
                  <label htmlFor="Telefon *">Telefon *</label>
                  <input
                    type="string"
                    placeholder="ex 0777 777 777"
                    className="form__control"
                    {...register("telephone")}
                  />
                  {errors.telephone && (
                    <span className="form__message !text-red-500">
                      {errors.telephone.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="form__group">
                <label htmlFor="Data nasterii *">Data nașterii *</label>
                {/* <input
                  type="date"
                  id="date_input"
                  placeholder="ex Adrian"
                  className="form__control"
                  {...register("date")}
                /> */}
                <InputMask
                  mask="99/99/9999" // Date format dd/mm/yyyy
                  placeholder="dd/mm/yyyy"
                  {...register("date", {
                    required: "Data nașterii este obligatorie",
                    validate: validateDate,
                    // pattern: {
                    //   value:
                    //     /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                    //   message:
                    //     "Format de dată nevalid, vă rugăm să utilizați dd/mm/yyyy",
                    // },
                  })}
                  className="form__control"
                />
                {errors.date && (
                  <span className="form__message !text-red-500">
                    {errors.date.message}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="Aplic pentru *">Aplic pentru *</label>
                <select
                  id="position__id"
                  className="form__control  !bg-[#182D4F]"
                  defaultValue={"Selecteaza jobul"}
                  {...register("position", { required: true })}
                >
                  <option disabled={true}>Selecteaza jobul</option>
                  <option value="Cyber-intelligence">Cyber-intelligence</option>
                  <option value="Mentenanță hardware / rețele">
                    Mentenanță hardware / rețele
                  </option>
                  <option value="Tehnologia informației">
                    Tehnologia informației
                  </option>
                  <option value="Criptologie">Criptologie</option>
                  <option value="Cercetare / dezvoltare tehnologii">
                    Cercetare / dezvoltare tehnologii
                  </option>
                  <option value="Programare IT">Programare IT</option>
                  <option value="Automatizare">Automatizare</option>
                  <option value="Instalații pentru construcții">
                    Instalații pentru construcții
                  </option>
                  <option value="Electrică și energetică">
                    Electrică și energetică
                  </option>
                  <option value="Construcții civile">Construcții civile</option>
                  <option value="Autovehicule rutiere">
                    Autovehicule rutiere
                  </option>
                </select>
                {errors.position && (
                  <span className="form__message !text-red-500">
                    {errors.position.message}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="Incarca CV-ul *">Incarcă CV-ul *</label>
                <div className="form__control custom__file__upload__form__control flex justify-between items-center">
                  {watch("file")[0] !== undefined && (
                    <div className="flex items-center gap-2 flex-row ml-4 overflow-scroll no-scrollbar">
                      <CircleCheckBig size={20} />
                      <p className="w-full overflow-scroll no-scrollbar">
                        {watch("file")[0]?.name}
                      </p>
                    </div>
                  )}
                  <p className="file__name" id="file__name" />
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    {...register("file")}
                  />
                  <label
                    className="orange__button !mb-0 cursor-pointer"
                    id="custom__file__upload"
                    htmlFor="fileInput"
                  >
                    Incarca
                  </label>
                </div>
                <span className="form__message">
                  word, text, pdf, jpg, jpeg max. 15MB
                </span>
                {errors.file && (
                  <span className="form__message !text-red-500">
                    {errors.file?.message?.toString()}
                  </span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="Scrie-ne pe scurt de ce iti doresti sa aplici *">
                  Scrie-ne pe scurt de ce iți dorești să aplici *
                </label>
                <textarea
                  cols={30}
                  rows={5}
                  className="form__control"
                  {...register("motivation")}
                />
                {errors.motivation && (
                  <span className="form__message !text-red-500">
                    {errors.motivation.message}
                  </span>
                )}
                <span className="form__message">max 1000 caractere</span>
              </div>
              <div
                className="application__form__message__container"
                id="application__form__message__container"
              >
                <div className="application__form__message">
                  Multumim, am receptionat mesajul si te vom contacta curand!
                </div>
              </div>
              {error && <div className="error__message">{error}</div>}

              <button
                type="submit"
                onClick={handleclick}
                className="orange__button application__button application__form__button"
                id="application__form__button"
              >
                {isLoading ? "Se trimite..." : "Aplică"}
              </button>
            </form>
          </div>
        </div>
        <SuccessMsgBox
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
    </>
  );
};

export default Section12;
