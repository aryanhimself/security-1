import type React from "react";
import {
	type MouseEventHandler,
	type PropsWithChildren,
	useState,
} from "react";
import CustomModal from "./CustomModal";

const CustomLink = ({ href, children, rel }: any) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal: MouseEventHandler<HTMLButtonElement> = (e) => {
		e?.preventDefault();
		setModalIsOpen(true);
	};

	return (
		<>
			<button type="button" className="underline inline" onClick={openModal}>
				{children}
			</button>
			<CustomModal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				content={href}
				rel={rel}
			/>
		</>
	);
};

export default CustomLink;
