// import React, { useState, useEffect, useMemo, useRef } from "react";
// import { generate } from "random-words";
// import useTyping from "react-typing-game-hook";
// // import InputForTyping from "./InputForTyping";
// const generateRandomWords = function () {
//   return generate(1000).join(" ");
// };

// const HomePage = () => {
//   try {
//     const divRef = useRef(null);
//     const inputRef = useRef(null);
//     const [change, setChange] = useState(false);
//     const text = useMemo(() => generateRandomWords(), [change]);
//     const [duration, setDuration] = useState(0);
//     const [typedWrong, setTypeWrong] = useState(false);
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     const maxWidth = useRef();
//     const iconRef = useRef();
//     const [typingInput, setTypingInput] = useState("");

//     const onClickResetButton = function () {
//       if (iconRef.current) {
//         iconRef.current.classList.add("rotate-animation");

//         setTimeout(() => {
//           if (iconRef.current) {
//             iconRef.current.classList.remove("rotate-animation");
//           }
//         }, 500);
//         window.location.reload();
//       }
//     };

//     const onChangeInputHandler = (e) => {
//       setTypingInput(e.target.value);
//     };

//     useEffect(() => {
//       maxWidth.current = divRef.current.getBoundingClientRect().right - 150;
//     }, [windowWidth]);

//     useEffect(() => {
//       const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//         maxWidth.current = divRef.current.getBoundingClientRect().right;
//       };

//       window.addEventListener("resize", handleResize);
//       handleResize();

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []);

//     const {
//       states: {
//         charsState,
//         currIndex,
//         phase,
//         correctChar,
//         errorChar,
//         startTime,
//         endTime,
//       },
//       actions: { insertTyping, resetTyping },
//     } = useTyping(text, {
//       skipCurrentWordOnSpace: true,
//     });

//     const onKeyDownHandler = (e) => {
//       if (e.key === "Escape") {
//         e.preventDefault();
//         window.location.reload();
//       } else if (e.key === "Enter" || e.key === " ") {
//         e.preventDefault();
//         submitWord();
//       }
//     };

//     useEffect(() => {
//       setTypeWrong((prev) => {
//         let hasError = false;
//         for (let i = 0; i < typingInput.length; i++) {
//           let char = typingInput[i];
//           let correctChar = text[currIndex + i];
//           let diff = char !== correctChar;
//           if (diff) {
//             hasError = true;
//             break;
//           }
//         }
//         if (hasError !== prev) {
//           return !prev;
//         } else {
//           return prev;
//         }
//       });
//     }, [typingInput, currIndex, text]);

//     const submitWord = () => {
//       try {
//         for (let i = currIndex; i < currIndex + typingInput.length; i++) {
//           insertTyping(typingInput[i - currIndex]);
//         }
//         let cursorPoint = 0;
//         const value = document.querySelector(".cursor");
//         if (value) {
//           cursorPoint = value.getBoundingClientRect().right;
//         }
//         insertTyping(" ");
//         setTypingInput("");
//         setTypeWrong(false);

//         if (cursorPoint + 100 >= maxWidth.current) {
//           const elements = document.querySelectorAll(".typed");
//           elements.forEach((element) => {
//             element.classList.add("scroll-out");
//           });

//           setTimeout(() => {
//             elements.forEach((element) => element.remove());
//           }, 500);
//         }
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     useEffect(() => {
//       if (phase === 2 && endTime && startTime) {
//         setDuration(Math.floor((endTime - startTime) / 1000));
//       } else {
//         setDuration(0);
//       }
//     }, [phase, startTime, endTime]);

//     return (
//       <>
//         <div>
//           <div className="bg-secondary-back w-[80%] ml-auto mr-auto mt-10 h-[130px] overflow-hidden rounded-md typing-test outline-none pt-1 pb-1 text-left pl-3 pr-3">
//             <div
//               className="pl-2 mt-1 rounded-md pr-2 pt-4 overflow-hidden typing-test outline-none"
//               ref={divRef}
//             >
//               {text.split("").map((letter, index) => {
//                 let state = charsState[index];
//                 let styling = "text-[#ff6666]";
//                 if (state === 1) {
//                   styling = "text-[#81ff61]";
//                 } else if (state === 0) {
//                   styling = "text-white";
//                 }

//                 let cursorClass = index === currIndex ? "cursor" : "";
//                 let typedClass = index < currIndex ? "typed" : "";
//                 return (
//                   <span
//                     key={index + letter}
//                     className={`${styling} ${cursorClass} ${typedClass}`}
//                   >
//                     {letter}
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//           {/* <InputForTyping
//             ref={inputRef}
//             onKeyDownHandler={onKeyDownHandler}
//             correctChar={correctChar}
//             duration={duration}
//           /> */}
//           <div className="w-[80%] flex gap-2 ml-auto mr-auto mt-4">
//             <input
//               type="text"
//               className="mr-[12px] text-white h-[60px] w-[60%] bg-secondary-back focus:outline-none  focus:ring-[#1585e0] ring-2 ring-[#2b2b2b] rounded-md mb-2 text-[21px] p-4 "
//               ref={inputRef}
//               onKeyDown={onKeyDownHandler}
//               onChange={onChangeInputHandler}
//               value={typingInput}
//               autoCorrect="off"
//               autoCapitalize="off"
//               spellCheck={false}
//             />
//             <div className="h-[60px] bg-secondary-back p-5 mr-[12px] rounded-md w-[120px] text-lg flex justify-center items-center">
//               <span>
//                 {Math.round(((60 / duration) * correctChar) / 5).toString()}
//               </span>
//             </div>
//             <div className="h-[60px] w-[120px] bg-secondary-back p-5 rounded-md text-lg mr-[12px] flex justify-center items-center">
//               <span>Timer</span>
//             </div>
//             <button
//               className="h-[60px] w-[85px] bg-secondary-back rounded-md hover:bg-secondary-blue flex justify-center items-center"
//               onClick={onClickResetButton}
//             >
//               <span ref={iconRef}>
//                 <FiRefreshCcw size={30} />
//               </span>
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export default HomePage;

import React, { useState, useEffect, useMemo, useRef } from "react";
import { generate } from "random-words";
import useTyping from "react-typing-game-hook";
import { FiRefreshCcw } from "react-icons/fi";
import InputForTyping from "./InputForTyping";

const generateRandomWords = () => generate(1000).join(" ");

const HomePage = () => {
  const divRef = useRef(null);
  const inputRef = useRef(null);
  const [change, setChange] = useState(false);
  const text = useMemo(() => generateRandomWords(), [change]);
  const [duration, setDuration] = useState(0);
  const [typedWrong, setTypeWrong] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const maxWidth = useRef();
  const iconRef = useRef();
  const [typingInput, setTypingInput] = useState("");

  useEffect(() => {
    maxWidth.current = divRef.current.getBoundingClientRect().right - 150;
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      maxWidth.current = divRef.current.getBoundingClientRect().right;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    states: {
      charsState,
      currIndex,
      phase,
      correctChar,
      errorChar,
      startTime,
      endTime,
    },
    actions: { insertTyping, resetTyping },
  } = useTyping(text, {
    skipCurrentWordOnSpace: true,
  });

  useEffect(() => {
    setTypeWrong((prev) => {
      let hasError = false;
      for (let i = 0; i < typingInput.length; i++) {
        let char = typingInput[i];
        let correctChar = text[currIndex + i];
        let diff = char !== correctChar;
        if (diff) {
          hasError = true;
          break;
        }
      }
      if (hasError !== prev) {
        return !prev;
      } else {
        return prev;
      }
    });
  }, [typingInput, currIndex, text]);

  const submitWord = () => {
    try {
      for (let i = currIndex; i < currIndex + typingInput.length; i++) {
        insertTyping(typingInput[i - currIndex]);
      }
      let cursorPoint = 0;
      const value = document.querySelector(".cursor");
      if (value) {
        cursorPoint = value.getBoundingClientRect().right;
      }
      insertTyping(" ");
      setTypingInput("");
      setTypeWrong(false);

      if (cursorPoint + 100 >= maxWidth.current) {
        const elements = document.querySelectorAll(".typed");
        elements.forEach((element) => {
          element.classList.add("scroll-out");
        });

        setTimeout(() => {
          elements.forEach((element) => element.remove());
        }, 500);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      window.location.reload();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      submitWord();
    }
  };

  useEffect(() => {
    if (phase === 2 && endTime && startTime) {
      setDuration(Math.floor((endTime - startTime) / 1000));
    } else {
      setDuration(0);
    }
  }, [phase, startTime, endTime]);

  const onChangeInputHandler = (e) => {
    setTypingInput(e.target.value);
  };

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
      <InputForTyping
        ref={inputRef}
        onKeyDownHandler={onKeyDownHandler}
        correctChar={correctChar}
        duration={duration}
        typingInput={typingInput}
        onChangeInputHandler={onChangeInputHandler}
      />
    </div>
  );
};

export default HomePage;
