"use client";
import ArrowRight from "@/components/Icons/ArrowRight";
import SingleTest from "@/components/ui/testPage/SingleTest";
import Link from "next/link";
import { useState } from "react";
import "./test.css";
import { useForm } from "react-hook-form";
import type { IQuestionResponse, ITestForm } from "@/types/test";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";
import ButtonContainer from "@/components/ui/testPage/ButtonContainer";
import BackScrollButton from "@/components/common/ScrollButton/BackScrollButton";
import { useRouter } from "next/navigation";

const TestPage = ({ data }: { data: IQuestionResponse }) => {
  const itemRef = useScrollIntoViewOnOpen(true, 600);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const form = useForm<ITestForm>({
    defaultValues: {
      questions: data.map((q) => {
        const options = [];
        q.answer_1 && options.push({ ...q.answer_1, checked: false });
        q.answer_2 && options.push({ ...q.answer_2, checked: false });
        q.answer_3 && options.push({ ...q.answer_3, checked: false });
        q.answer_4 && options.push({ ...q.answer_4, checked: false });

        return {
          question: q.question,
          test_category: q.test_category,
          test_id: q.test_id,
          image: q.image,
          done: false,
          isCorrect: false,
          options,
        };
      }),
    },
  });

  const done = form.watch(`questions.${currentIndex}.done`);
  const onDone = () => {
    form.setValue(`questions.${currentIndex}.done`, true);
  };

  const onGoToNextPage = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const navigateAndScroll = () => {
    router.push("/joburi?scrollTo=teste");
  };

  const totalCorrect = form
    .getValues()
    .questions.filter((q) => q.isCorrect).length;

  return (
    <>
      <form onSubmit={form.handleSubmit(() => {})}>
        <div className="container pb-10" ref={itemRef}>
          {currentIndex < data.length ? (
            <>
              <div className="test__question__container">
                <SingleTest currentIndex={currentIndex} form={form} />
                <div id="feedback-container"> </div>
                {!done && (
                  <button
                    className="test__question__button"
                    id="submit-btn"
                    type="button"
                    onClick={onDone}
                  >
                    Submit
                  </button>
                )}
                <div
                  className="next__test__container w-full md:w-[707px] m-auto"
                  style={{ display: "none" }}
                  id="next-btn-container"
                >
                  <div
                    className="category__button cursor-pointer"
                    onClick={navigateAndScroll}
                  >
                    Alege altă categorie
                  </div>
                  <button className="test__button" id="next-btn" type="button">
                    <p>Testul următor</p>
                    <ArrowRight />
                  </button>
                </div>
              </div>
              {done && (
                <div
                  className="next__test__container w-full md:w-[707px] m-auto"
                  style={{ display: "flex" }}
                  id="next-btn-container"
                >
                  <div
                    onClick={navigateAndScroll}
                    className="category__button cursor-pointer"
                  >
                    Alege altă categorie
                  </div>
                  <button
                    onClick={onGoToNextPage}
                    className="test__button"
                    id="next-btn"
                    type="button"
                  >
                    <p>Testul următor</p>
                    <ArrowRight />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="test__question__container">
              <div id="question-container">
                <div className="test__answer__message__wrong">
                  <h2 style={{ marginBottom: "10px" }}>
                    Scorul tău: {totalCorrect}/{data.length}. Ai răspuns corect
                    la {totalCorrect} din {data.length} întrebări.
                  </h2>
                  <h2>Aplică și puneți în valoare cunoștințele!</h2>
                  <ButtonContainer
                    secondLink="Oferta-de-joburi"
                    secondText="JOBURI Disponibile"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
      <BackScrollButton />
    </>
  );
};

export default TestPage;
