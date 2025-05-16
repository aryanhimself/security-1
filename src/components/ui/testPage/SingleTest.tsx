import RightIcon from "@/components/Icons/RightIcon";
import WrongIcon from "@/components/Icons/WrongIcon";
import type { ITestForm } from "@/types/test";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import type { UseFormReturn } from "react-hook-form";
import ButtonContainer from "./ButtonContainer";
import Image from "next/image";

const SingleTest = ({
  currentIndex,
  form,
}: {
  currentIndex: number;
  form: UseFormReturn<ITestForm, any, undefined>;
}) => {
  const question = form.watch(`questions.${currentIndex}`);
  const done = form.watch(`questions.${currentIndex}.done`);
  const messageRef = useRef<HTMLDivElement | null>(null);

  const allCorrectAnswers = question.options
    .filter((i) => i.is_true === true)
    .sort();
  const allSelectedAnswers = question.options
    .filter((i) => i.checked === true)
    .sort();

  const isCorrect =
    JSON.stringify(allCorrectAnswers) === JSON.stringify(allSelectedAnswers);

  const correctAns = question.options
    .filter((i) => i.is_true === true)
    .map((i) => i.answer_text)
    .join("& ");

  useEffect(() => {
    if (done && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [done]);

  useEffect(() => {
    if (done) {
      form.setValue(`questions.${currentIndex}.isCorrect`, isCorrect);
    }
  }, [done, form, currentIndex, isCorrect]);

  return (
    <div id="question-container">
      <h2
        className="flex text-lg md:text-xl gap-3 items-start"
        style={{
          // gap: "10px",
          // fontSize: "20px",
          color: done ? (isCorrect ? "#01bf63" : "#ee6437") : "#333",
        }}
      >
        {done &&
          (isCorrect ? (
            <div className="question__right__icon mt-1">
              <RightIcon />
            </div>
          ) : (
            <div className="question__wrong__icon mt-1">
              <WrongIcon />
            </div>
          ))}
        {question.question} *
      </h2>
      <p>Poate fi unul sau mai multe răspunsuri corecte</p>
      {question.image && (
        <div className="test__question__image">
          <picture>
            <Image
              src={question.image}
              alt={`Question ${question.question}`}
              width={400}
              height={400}
            />
          </picture>
        </div>
      )}
      <div className="test__question__checkbox">
        {question.options.map((i, index) => (
          <Option
            key={`index=${i.answer_text}`}
            form={form}
            done={done}
            optionIndex={index}
            questionIndex={currentIndex}
          />
        ))}
        {done && (
          <div
            ref={messageRef}
            className={
              isCorrect
                ? "test__answer__message__right"
                : "test__answer__message__wrong"
            }
          >
            <h2 style={{ marginBottom: "10px" }}>
              {isCorrect
                ? `Felicitări! Ai răspuns corect “${correctAns}”`
                : `Răspunsul corect este “${correctAns}”`}
            </h2>
            <h2>
              {isCorrect
                ? "Aplică și puneți în valoare cunoștințele!"
                : "Aplică acum și învață de la cei mai buni specialiști!"}
            </h2>
            <ButtonContainer
              secondLink="Oferta-de-joburi"
              secondText={
                isCorrect ? "JOBURI Disponibile" : "Stagii de Pregătire"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleTest;

const Option = ({
  optionIndex,
  questionIndex,
  form,
  done,
}: {
  optionIndex: number;
  questionIndex: number;
  form: UseFormReturn<ITestForm, string, undefined>;
  done: boolean;
}) => {
  const option = form.watch(
    `questions.${questionIndex}.options.${optionIndex}`
  );
  const isChecked = option.checked;
  const isCorrect = done && option.is_true;
  const isIncorrect = done && option.checked && !option.is_true;

  const onChange = () => {
    form.getValues(`questions.${questionIndex}.options`).map((i, opIn) => {
      if (opIn === optionIndex) {
        console.log(
          form.getValues(`questions.${questionIndex}.options.${opIn}.checked`)
        );
        form.setValue(
          `questions.${questionIndex}.options.${opIn}.checked`,
          !form.getValues(`questions.${questionIndex}.options.${opIn}.checked`)
        );
      }
    });
  };

  return (
    <label
      className={`container_checkbox flex__between ${
        isCorrect && "right__answer"
      }  ${isIncorrect && "wrong__answer"}`}
      htmlFor={`question-${questionIndex}-option-${optionIndex}`}
    >
      <div className="flex items-center w-full justify-between">
        {option.answer_text}
        <input
          disabled={done}
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
          id={`question-${questionIndex}-option-${optionIndex}`}
        />
        <span
          className={
            done
              ? isCorrect
                ? "checkmark__right checkmark"
                : "checkmark__wrong checkmark"
              : "checkmark"
          }
        />
        <div className="wrong__icon">
          <WrongIcon />
        </div>
        <div className="right__icon">
          <RightIcon />
        </div>
      </div>
    </label>
  );
};
