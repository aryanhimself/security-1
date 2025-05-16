import React from "react";
import "./index.css";

const HorizontalLine = ({
	heading,
	subHeading,
}: {
	heading?: string;
	subHeading: string;
}) => {
	return (
		<div className="tag__container flex justify-center flex-wrap">
			{heading && <div className="heading__tags">{heading}</div>}
			<div>
				<h1 className="text-[28px] font-bold text-center">{subHeading}</h1>
				<div className="flex flex-row">
					<div className="h-1 bg-[#054CD6] w-full" />
					<div className="h-1 bg-[#FCD116] w-full" />
					<div className="h-1 bg-[#CE1126] w-full" />
				</div>
			</div>
		</div>
	);
};

export default HorizontalLine;
