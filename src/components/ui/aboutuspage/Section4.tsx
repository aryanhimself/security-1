import React from "react";
import "./Section4.css";
import { LEGISLATIE_DATA } from "@/config/data";
import { poppins } from "@/app/fonts";

const Section4 = () => {
  const midIndex = Math.ceil(LEGISLATIE_DATA.length / 2);
  return (
    <div className="legislation-section px-4 sm:px-16 py-20">
      <div className="container-sm p-2">
        <div className="legislation-container">
          <div className="cooperate-title-container">
            <h1 className={`legislation-title ${poppins.className}`}>
              LEGISLAȚIE
            </h1>
            <div className="cooperate-bottom-border">
              <div className="border-blue" />
              <div className="border-yellow" />
              <div className="border-red" />
            </div>
          </div>
          <div className="md:flex  gap-10 mt-10">
            <ol className="flex-1">
              {LEGISLATIE_DATA.slice(0, midIndex).map((value, i) => (
                <li key={i} className="flex gap-5 mt-5">
                  <div>{i + 1}. </div>
                  <a
                    href={value.link}
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    {value.title}
                  </a>
                </li>
              ))}
            </ol>

            <ol className="flex-1">
              {LEGISLATIE_DATA.slice(midIndex).map((value, i) => (
                <li key={i} className="flex gap-5 mt-5">
                  {i + midIndex + 1}.{" "}
                  <a
                    href={value.link}
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    {value.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
