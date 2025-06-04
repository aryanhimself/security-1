import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonContainer = ({
  secondLink,
  secondText,
}: {
  secondLink: String;
  secondText: String;
}) => {
  const router = useRouter();

  const navigateAndScroll = () => {
    router.push("/?scrollTo=formular-de-aplicare");
  };

  return (
    <div>
      <div className="test__answer__message__container cursor-pointer">
        <div className="applicaitonButton" onClick={() => navigateAndScroll()}>
          Formular Aplicare
        </div>
        <div
          className="applicaitonButton"
          onClick={() => router.push(`/?scrollTo=${secondLink}`)}
        >
          {secondText}
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
