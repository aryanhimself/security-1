"use client";
import type React from "react";
import { useRef } from "react";
import "./index.css";
import { cn } from "@/lib/utils";
const Accordion = ({
	title,
	children,
	className,
}: {
	title: string;
	children: React.ReactNode;
	className?: string;
}) => {
	const accordionRef = useRef<HTMLButtonElement>(null);
	const onClick = () => {
		const acc = document.querySelectorAll(".accordion");
		const alreadyActive =
			accordionRef?.current?.parentElement?.classList.contains("active");

		for (let i = 0; i < acc.length; i++) {
			acc?.[i]?.parentElement?.classList.remove("active");

			!alreadyActive &&
				accordionRef?.current?.parentElement?.classList.add("active");
		}
	};

	return (
		<div className={className || "accordion_container"}>
			<button
				type="button"
				onClick={onClick}
				className="accordion"
				ref={accordionRef}
			>
				{title}
				<picture>
					<img src="/images/accordionIcon.svg" alt="accordionIocn" />
				</picture>
			</button>
			<div className="panel">{children}</div>
		</div>
	);
};

const AccordionWrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="accordion_wrapper">{children}</div>;
};
export { AccordionWrapper };
export default Accordion;
