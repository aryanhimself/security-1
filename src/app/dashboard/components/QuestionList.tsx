import React from "react";
import type { IDateType } from "../page";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ questions }: { questions: IDateType[] }) => {
	return (
		<div className="flex flex-col gap-6 mb-5">
			{questions.map((question) => (
				<QuestionCard key={question.id} question={question} />
			))}
		</div>
	);
};

export default QuestionList;
