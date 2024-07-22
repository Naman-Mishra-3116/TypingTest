import React from "react";
import { forwardRef, useRef, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

const InputForTyping = forwardRef(
  (
    {
      onKeyDownHandler,
      duration,
      correctChar,
      onChangeInputHandler,
      typingInput,
    },
    ref
  ) => {
    const iconRef = useRef();
    const onClickResetButton = () => {
      if (iconRef.current) {
        iconRef.current.classList.add("rotate-animation");

        setTimeout(() => {
          if (iconRef.current) {
            iconRef.current.classList.remove("rotate-animation");
          }
        }, 500);
        window.location.reload();
      }
    };

    return (
      <div className="w-[80%] flex gap-2 ml-auto mr-auto mt-4">
        <input
          type="text"
          className="mr-[12px] text-white h-[60px] w-[60%] bg-secondary-back focus:outline-none  focus:ring-[#1585e0] ring-2 ring-[#2b2b2b] rounded-md mb-2 text-[21px] p-4 "
          ref={ref}
          onKeyDown={onKeyDownHandler}
          onChange={onChangeInputHandler}
          value={typingInput}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        <div className="h-[60px] bg-secondary-back p-5 mr-[12px] rounded-md w-[120px] text-lg flex justify-center items-center">
          <span>
            {Math.round(((60 / duration) * correctChar) / 5).toString()}
          </span>
        </div>
        <div className="h-[60px] w-[120px] bg-secondary-back p-5 rounded-md text-lg mr-[12px] flex justify-center items-center">
          <span>Timer</span>
        </div>
        <button
          className="h-[60px] w-[85px] bg-secondary-back rounded-md hover:bg-secondary-blue flex justify-center items-center"
          onClick={onClickResetButton}
        >
          <span ref={iconRef}>
            <FiRefreshCcw size={30} />
          </span>
        </button>
      </div>
    );
  }
);

export default InputForTyping;
