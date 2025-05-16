import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { IAddQuestion } from "./AddQuestionForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const QuestionOption = () => {
	const form = useFormContext<IAddQuestion>();
	const { fields, append, remove } = useFieldArray({
		name: "answer",
		control: form.control,
	});
	const onAddMore = () => {
		append({
			answer_text: "",
			is_true: false,
		});
	};
	const onDelete = (index: number) => {
		remove(index);
	};
	return (
		<>
			{fields.map((x, index) => (
				<div key={x.id} className="flex gap-2 justify-start">
					<Input
					className="w-7"
						type="checkbox"
						{...form.register(`answer.${index}.is_true`)}
					/>
					<div className="grid  w-full max-w-lg items-center gap-1.5">
						<Input {...form.register(`answer.${index}.answer_text`)} />
					</div>
					<Button
						variant={"destructive"}
						type="reset"
						onClick={() => onDelete(index)}
					>
						Delete
					</Button>
				</div>
			))}
			<div className="flex gap-2">
				<Button type="button" variant={'secondary'} onClick={onAddMore}>
					Add More Option
				</Button>
				
			</div>
		</>
	);
};

export default QuestionOption;
