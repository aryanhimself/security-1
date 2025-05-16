import React from "react";
import "./employment_condition.css";
import { EMPLOYER_CONDITION } from "@/config/data";

const EmployerCondition = () => {
	const { title, list } = EMPLOYER_CONDITION;
	return (
		<section
			className="condition__section padding__style"
			id="condition__section"
		>
			<div className="container">
				<h1>{title}</h1>
				<div className="general__condition__container">
					{list.map((item) => (
						<div key={item.id}>
							<p>{item.title}</p>
							{item.subTitle && <p>{item.subTitle}</p>}
							{item.description?.map((desc, i) => (
								<li key={i}>{desc}</li>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmployerCondition;
