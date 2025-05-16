import type React from "react";

const AccessabilityRow = ({
	onClick,
	icon,
	title,
}: {
	onClick: () => void;
	icon: React.JSX.Element;
	title: string;
}) => {
	return (
		<li>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a onClick={onClick} className="real-accessability-effect accessability">
				{icon}
				{title}
			</a>
		</li>
	);
};

export default AccessabilityRow;
