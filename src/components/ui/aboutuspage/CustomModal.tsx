import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import "./CustomModal.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const imageSizeData = [
  {
    image: "istoria_reorganizare_SSI.jpg",
    className: "h-[90vh]",
  },
  {
    image: "istoria_SSI_frontul_EST.jpg",
    className: "w-[90vw]",
  },
];

const CustomModal = ({
  isOpen,
  onRequestClose,
  content,
  rel,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
  content: string;
  rel: string;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="modal content"
      className={
        rel
          ? "custom-modal-hyperlink-text custom-modal-hyperlink"
          : "custom-modal-hyperlink-image custom-modal-hyperlink"
      }
    >
      {rel === "true" ? (
        <div className="overflow-scroll h-full">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </ReactMarkdown>
        </div>
      ) : (
        <picture>
          <img
            src={`/images/cronologia/${content}`}
            alt="cronologia"
            className={
              imageSizeData.find((image) => image.image === content)
                ?.className || "h-full md:h-auto w-full md:w-auto"
            }
          />
        </picture>
      )}

      <button type="button" onClick={onRequestClose} className="close-modal">
        <span className="close">&times;</span>
      </button>
    </Modal>
  );
};

export default CustomModal;
