import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import QuestionOption from "./QuestionOption";
import type { IDateType } from "../page";
import { Button } from "@/components/ui/button";

async function convertToBase64(file:File):Promise<string | ArrayBuffer | null> {
	return new Promise((resolve, reject) => {
	  const reader = new FileReader();
  
	  reader.onload = () => {
		const base64Image = reader.result;
		resolve(base64Image);
	  };
  
	  reader.onerror = (error) => {
		reject(error);
	  };
  
	  reader.readAsDataURL(file);
	});
  }
export type IAddQuestion = {
	test_id: string;
	test_category: string;
	question: string;
	image: File[];
	answer: {
		answer_text: string;
		is_true: boolean;
	}[];
};
const AddQuestionForm = ({
	onAddQuestion,
	onDeleteQuestion,
	onUpdateQuestion,
	qData,
}: {
	onAddQuestion: (data: IDateType) => void;
	onDeleteQuestion: (id: string) => void;
	onUpdateQuestion: (data: IDateType) => void;
	qData?: IDateType;
}) => {
	const form = useForm<IAddQuestion>({
		defaultValues: {
			test_id: "",
			test_category: "",
			question: "",
		
			answer: [
				{
					answer_text: "",
					is_true: false,
				},
			],
		},
	});

	const onSubmit = form.handleSubmit(async (data) => {
	  const image = data.image;

		const image64 = (image && image.length>0)? await convertToBase64(image[0]):undefined;
		const finalData: IDateType = {
			question: data.question as string,
			test_category: data.test_category,
			image:image64,
			answer_1: {
				answer_text: data.answer[0].answer_text,
				is_true: data.answer[0].is_true,
			},
			answer_2: {
				answer_text: data.answer[1].answer_text,
				is_true: data.answer[1].is_true,
			},
			answer_3: {
				answer_text: data.answer[2].answer_text,
				is_true: data.answer[2].is_true,
			},
			answer_4: {
				answer_text: data.answer[3].answer_text,
				is_true: data.answer[3].is_true,
			},
			id: Math.random().toString(),
		};
		if (qData) {
			onUpdateQuestion(finalData);
		} else {
			onAddQuestion(finalData);
		}
		form.reset();
	});
	return (
		<FormProvider {...form}>
			<form onSubmit={onSubmit}>
				<Card className="py-6">
					<CardContent>
						<div className="flex flex-col gap-6">
							<div className="grid w-full max-w-lg items-center gap-1.5">
								<Label htmlFor="question">Question</Label>
								<Input
									id="question"
									type="text"
									{...form.register("question")}
								/>
							</div>
							<div className="grid w-full max-w-lg items-center gap-1.5">
								<Label htmlFor="image">Image</Label>
								<Input id="image" type="file" {...form.register("image")} />
							</div>
							<div className="grid w-full max-w-lg items-center gap-1.5">
								<Label htmlFor="category">Category</Label>
								<Select {...form.register("test_category")}>
									<SelectTrigger className="border">
										<SelectValue placeholder="Select a fruit" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="analiza">analiza</SelectItem>
											<SelectItem value="criptologi">criptologi</SelectItem>
											<SelectItem value="it">it</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<QuestionOption />
						</div>
						<Button type="submit" className="my-4">Save</Button>
					</CardContent>
				</Card>
			</form>
		</FormProvider>
	);
};

export default AddQuestionForm;
