import React from "react";
import { useGameHook } from "../Hooks/useGameHook";
import { useState } from "react";
import InputBox from "./InputBox";
import TextBox from "./TextBox";
import { useSettingGameHook } from "../Hooks/useGameSettingHook";
import SettingButton from "../UI/SettingButton";
import LineGraph from "./../UI/LineGraph";

const HomePage = ({ updateKey }) => {
  const {
    time,
    setTime,
    wordType,
    setWordType,
    number,
    setNumber,
    punc,
    setPunc,
    showWPM,
    setShowWPM,
    showTimer,
    setShowTimer,
    durationArray,
    wordTypeArray,
    numbersArray,
    punctuationArray,
    hideTimerArray,
    hideWPMArray,
  } = useSettingGameHook();

  const {
    divRef,
    inputRef,
    text,
    correctWords,
    incorrectWords,
    correctChar,
    errorChar,
    charsState,
    currIndex,
    typingInput,
    onChangeInputHandler,
    onKeyDownHandler,
    graphData,
  } = useGameHook(time);

  const [data, setData] = useState(null);

  return (
    <div>
      <TextBox
        ref={divRef}
        charsState={charsState}
        currIndex={currIndex}
        text={text}
      />
      <InputBox
        ref={inputRef}
        onKeyDownHandler={onKeyDownHandler}
        correctChar={correctChar}
        errorChar={errorChar}
        duration={time}
        typingInput={typingInput}
        onChangeInputHandler={onChangeInputHandler}
        updateKey={updateKey}
        index={currIndex}
        rightWords={correctWords.current}
        wrongWords={incorrectWords.current}
        data={graphData}
        setData={setData}
        showWPM={showWPM}
        showTimer={showTimer}
      />

      <div className="flex gap-[40px] mt-[3rem] ml-auto mr-auto w-[80%] justify-center items-center">
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-3xl mb-4">
              <span className="font-bold text-[40px]">
                {data !== null
                  ? Math.round((correctChar / 4) * (60 / time))
                  : 0}{" "}
                <span className="font-normal text-2xl ml-2">WPM</span>
              </span>
            </li>
            <li className="flex justify-between bg-secondary-back px-4 py-2 rounded-md w-[250px]">
              <p>Raw WPM</p>
              {data === null ? (
                <span>&mdash;</span>
              ) : (
                <span>
                  {Math.round((correctChar + errorChar) / 4 / (time / 60))}
                </span>
              )}
            </li>
            <li className="flex justify-between bg-primary-back px-4 py-2 rounded-md w-[250px]">
              <p>Accuracy</p>
              <p>
                {data === null ? (
                  <span>&mdash;</span>
                ) : (
                  <span>
                    {Math.round(
                      (correctChar * 100) / (correctChar + errorChar)
                    )}
                    &nbsp;%
                  </span>
                )}
              </p>
            </li>
            <li className="flex justify-between bg-secondary-back px-4 py-2 w-[250px] rounded-md">
              <p>Correct characters</p>
              <p>{data === null ? <span>&mdash;</span> : correctChar}</p>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-md w-[250px]">
              <p>Incorrect characters</p>
              <p>{data === null ? <span>&mdash;</span> : errorChar}</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-[2px] w-[400px]">
            <SettingButton
              listOfAction={durationArray}
              settingFunction={setTime}
              title={"Time Duration"}
              storageReference={"time"}
              defaultSettingIndex={+localStorage.getItem("time") ?? 2}
              updateKey={updateKey}
            />
            <SettingButton
              listOfAction={wordTypeArray}
              settingFunction={setWordType}
              title={"Word List"}
              storageReference={"word"}
              defaultSettingIndex={+localStorage.getItem("word") || 0}
              updateKey={updateKey}
            />
            <SettingButton
              listOfAction={numbersArray}
              settingFunction={setNumber}
              title={"Numbers"}
              storageReference={"number"}
              defaultSettingIndex={+localStorage.getItem("number") || 0}
              updateKey={updateKey}
            />
            <SettingButton
              listOfAction={punctuationArray}
              settingFunction={setPunc}
              title={"Punctuation"}
              storageReference={"punctuation"}
              defaultSettingIndex={+localStorage.getItem("punctuation") || 0}
              updateKey={updateKey}
            />
            <SettingButton
              listOfAction={hideWPMArray}
              settingFunction={setShowWPM}
              title={"Show WPM"}
              storageReference={"showwpm"}
              defaultSettingIndex={+localStorage.getItem("showwpm") || 0}
              updateKey={updateKey}
            />
            <SettingButton
              listOfAction={hideTimerArray}
              settingFunction={setShowTimer}
              title={"Show Timer"}
              storageReference={"showTimer"}
              defaultSettingIndex={+localStorage.getItem("showTimer") || 0}
              updateKey={updateKey}
            />

            <li className="flex justify-between px-4 py-2 rounded-md w-[400px]">
              <p>Language</p>
              <p>English</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-auto mr-auto h-[350px] mt-[100px] justify-stretch flex w-[80%]">
        {data && <LineGraph data={data} />}
      </div>
    </div>
  );
};

export default HomePage;
