import React from "react";
import { useGameHook } from "../Hooks/useGameHook";
import InputBox from "./InputBox";
const HomePage = ({ updateKey }) => {
  
  const {
    divRef,
    inputRef,
    text,
    duration,
    correctWords,
    incorrectWords,
    correctChar,
    errorChar,
    charsState,
    currIndex,
    typingInput,
    onChangeInputHandler,
    onKeyDownHandler,
  } = useGameHook();

  return (
    <div>
      <div className="bg-secondary-back w-[80%] ml-auto mr-auto mt-10 h-[130px] overflow-hidden rounded-md typing-test outline-none pt-1 pb-1 text-left pl-3 pr-3">
        <div
          className="pl-2 mt-1 rounded-md pr-2 pt-4 overflow-hidden typing-test outline-none ml-2"
          ref={divRef}
        >
          {text.split("").map((letter, index) => {
            let state = charsState[index];
            let styling = "text-[#ff6666]";
            if (state === 1) {
              styling = "text-[#81ff61]";
            } else if (state === 0) {
              styling = "text-white";
            }

            let cursorClass = index === currIndex ? "cursor" : "";
            let typedClass = index < currIndex ? "typed" : "";
            return (
              <span
                key={index + letter}
                className={`${styling} ${cursorClass} ${typedClass}`}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
      <InputBox
        ref={inputRef}
        onKeyDownHandler={onKeyDownHandler}
        correctChar={correctChar}
        errorChar={errorChar}
        duration={duration}
        typingInput={typingInput}
        onChangeInputHandler={onChangeInputHandler}
        updateKey={updateKey}
        index={currIndex}
        rightWords={correctWords.current}
        wrongWords={incorrectWords.current}
      />

      <span className="mr-4"> Current Index: {currIndex}</span>
      <span className="mr-4"> Correct Characters: {correctChar}</span>
      <span className="mr-4"> Error Characters: {errorChar}</span>
      <span className="mr-4">
        {" "}
        Accuracy: {Math.round((correctChar * 100) / (correctChar + errorChar))}
        {"%"}
      </span>
      <span className="mr-4"> Correct Words: {correctWords.current}</span>
      <span className="mr-4"> Wrong Words: {incorrectWords.current}</span>
    </div>
  );
};

export default HomePage;
