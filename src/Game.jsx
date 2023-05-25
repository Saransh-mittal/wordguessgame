import React, { useState } from "react";

const Game = () => {
  let words = [
    "php",
    "java",
    "python",
    "c++",
    "qbasic",
    "javascript",
    "css",
    "html",
  ];
  
  const [buttonWord, setButtonWord] = useState("Click To Start");
  const [newW, setNewW] = useState("");
  const [randomW, setRandomW] = useState("");
  const [inputWord, setInputWord] = useState("");
  const [hide, setHide] = useState(true);
  const [heading, setHeading] = useState("Guess the word: ");
  const [show, setShow] = useState(false);

  const changeButton = () => {
    if (buttonWord === "Click To Start" || buttonWord === "Start") {
      const idx = Math.floor(Math.random() * words.length);
      const word = words[idx];
      setNewW(word);
      let i = word.length - 1;
      let str = "";
      for (i; i >= 0; i--) str += word[i];
      i = 1;
      let s = str.split("");
      for (i; i < word.length; i++) {
        let j = Math.floor(Math.random() * (i) + 1);
        let temp = s[j];
        s[j] = s[i];
        s[i] = temp;
      }
      setRandomW(s.join(""));
      setButtonWord("Guess");
      setHeading("Guess the word: ");
      setHide(false);
      setShow(true);
    } else {
      if (inputWord === newW) {
        setHide(true);
        setButtonWord("Start");
        setRandomW("");
        setHeading("Nice!! correct Answer");
      } else setHeading("Wrong. Please guess again: ");
      setInputWord("");
    }
    // else console.log(newW);
    // else if(buttonWord==="Start") setButtonWord("Guess");
  };

  const inputEvent = (event) => {
    setInputWord(event.target.value);
  };

  return (
    <>
      <div className="bg-emerald-300 h-[85vh] flex justify-center items-center">
        <div className="bg-emerald-500 h-[45vh] w-[50%] rounded-md shadow-lg shadow-slate-600/50 flex flex-col justify-center items-center gap-6">
          {show && (
            <h3 className="text-xl font-bold">
              {heading}
              {randomW}
            </h3>
          )}
          {!hide && (
            <input
              placeholder="Enter the Word..."
              onChange={inputEvent}
              value={inputWord}
              className="bg-slate-200 h-12 rounded-3xl outline-0 px-5"
            ></input>
          )}

          <button
            onClick={changeButton}
            className="bg-white h-12 min-w-[18%] rounded-md text-base uppercase font-medium text-red-600"
          >
            {buttonWord}
          </button>
        </div>
      </div>
    </>
  );
};

export default Game;
