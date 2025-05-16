export type ITestForm = {
	questions: {
		question: string;
		test_category: string;
		test_id: number;
		image: string;
		done: boolean;
		isCorrect: boolean;
		options: {
			checked: boolean;
			answer_text: string;
			is_true: boolean;
		}[];
	}[];
};

export type IQuestionResponse = {
	test_id: number;
	test_category: string;
	question: string;
	image: string;
	answer_1: {
		answer_text: string;
		is_true: boolean;
	};
	answer_2: {
		answer_text: string;
		is_true: boolean;
	};
	answer_3: {
		answer_text: string;
		is_true: boolean;
	};
	answer_4: {
		answer_text: string;
		is_true: boolean;
	};
}[];
