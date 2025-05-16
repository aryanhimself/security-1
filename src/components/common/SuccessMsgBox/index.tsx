import { X } from "lucide-react";
import React from "react";

const SuccessMsgBox = ({
  isModalOpen = false,
  setIsModalOpen,
}: {
  isModalOpen?: boolean;
  setIsModalOpen?: any;
}) => {
  return (
    <div
      className={`w-full h-full absolute top-0 bg-[#0000004D] items-center justify-center ${
        isModalOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white text-black w-[381px] p-5 rounded-[5px]">
        <div className="flex justify-between">
          <h3 className="text-base font-bold ">Mulțumim!</h3>
          <div className="cursor-pointer" onClick={() => setIsModalOpen(false)}>
            <X />
          </div>
        </div>
        <h3 className="mt-4 text-base font-medium pr-10">
          Mulțumim pentru completarea formularului! Am primit informațiile tale
          și te vom contacta în curând.
        </h3>
      </div>
    </div>
  );
};

export default SuccessMsgBox;
