import React from "react";
import type { IDateType } from "../page";
import { Card, CardContent } from "@/components/ui/card";

const QuestionCard = ({ question }: { question: IDateType }) => {
	return (
		<Card className="">
			<CardContent>
				<h1 className="text-2xl font-semibold">{question.question}</h1>
				<div className="mt-4">
					<h2 className="text-lg font-semibold">Answers</h2>
					<div className="mt-2 mx-5">
						{question.answer_1 && (
							<div className="flex gap-2 items-center">
								<input
									type="checkbox"
									defaultChecked={question.answer_1?.is_true}
								/>
								<p>{question.answer_1.answer_text}</p>
							</div>
						)}
						{question.answer_2 && (
							<div className="flex gap-2 items-center">
								<input
									type="checkbox"
									defaultChecked={question.answer_2?.is_true}
								/>
								<p>{question.answer_2.answer_text}</p>
							</div>
						)}
						{question.answer_3 && (
							<div className="flex gap-2 items-center">
								<input
									type="checkbox"
									defaultChecked={question.answer_3?.is_true}
								/>
								<p>{question.answer_3.answer_text}</p>
							</div>
						)}
						{question.answer_4 && (
							<div className="flex gap-2 items-center">
								<input
									type="checkbox"
									defaultChecked={question.answer_4?.is_true}
								/>
								<p>{question.answer_4.answer_text}</p>
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default QuestionCard;
