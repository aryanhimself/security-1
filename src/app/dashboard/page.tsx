"use client";
import AddQuestionForm from "./components/AddQuestionForm";
import { useState } from "react";
import QuestionList from "./components/QuestionList";
import { Button } from "@/components/ui/button";

export type IDateType = {
	id: string;
	test_category: string;
	question: string;
	image?: string | ArrayBuffer | null | undefined;
	answer_1?: {
		answer_text: string;
		is_true: boolean;
	};
	answer_2?: {
		answer_text: string;
		is_true: boolean;
	};
	answer_3?: {
		answer_text: string;
		is_true: boolean;
	};
	answer_4?: {
		answer_text: string;
		is_true: boolean;
	};
};
const exportJson = (questions:IDateType[]) => {
	const dataStr =
	  `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(questions))}`;
	  const dlAnchorElem = document.createElement('a')
	dlAnchorElem?.setAttribute("href", dataStr);
	dlAnchorElem?.setAttribute("download", "data.json");
	document.body.appendChild(dlAnchorElem)
	dlAnchorElem?.click();
	document.body.removeChild(dlAnchorElem)
  };
const DashboardPage = () => {
	const [questionData, setQuestionData] = useState<IDateType[]>([]);
	const [showAdd,setShowAdd] = useState(false)

	const onAddQuestion = (data: IDateType) => {
		setQuestionData((questionData) => [...questionData, data]);
		setShowAdd(false)
	};
	const onDeleteQuestion = (id: string) => {
		setQuestionData((questionData) => questionData.filter((x) => x.id));
		setShowAdd(false)
	};

	const onUpdateQuestion = (data: IDateType) => {
		const index = questionData.findIndex((x) => x.id === data.id);
		if (index === -1) return;
		questionData[index] = data;
		setQuestionData([...questionData]);
		setShowAdd(false)
	};
	return (
		<div className="mt-10 px-4">
			<QuestionList questions={questionData} />
			{showAdd && <AddQuestionForm
				onAddQuestion={onAddQuestion}
				onDeleteQuestion={onDeleteQuestion}
				onUpdateQuestion={onUpdateQuestion}
			/>}
			{!showAdd && <Button onClick={()=>setShowAdd(true)}>Add Question </Button>}

			{questionData.length>0&&<Button onClick={()=>exportJson(questionData)}>Download question json</Button>}
		</div>
	);
};

export default DashboardPage;
