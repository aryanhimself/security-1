import React, { Suspense } from "react";
import Test from "./test";

const page = () => {
	return (
		<Suspense fallback={<>loading...</>}>
			<Test />
		</Suspense>
	);
};

export default page;
