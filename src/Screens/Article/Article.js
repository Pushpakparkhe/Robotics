import React from "react";
import { useState } from "react";
import "./Style.css";

function Article() {
  const [inputArray, setInputArray] = useState([]);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  console.log("aaaaaaaa",inputArray);

  const handleInput1Change = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInputValue2(event.target.value);
  };

  const handleButtonClick = () => {
    const newObj = { input1: inputValue1, input2: inputValue2 };
    setInputArray([...inputArray, newObj]);
    setInputValue1("");
    setInputValue2("");
  };

  return (
    <div className="ArticlePage">
      <div className="col-12 col-lg-6 userinput">
        <input className="name" type="text" value={inputValue1} onChange={handleInput1Change} placeholder="Enter Name"/>
        <input className="article" type="text" value={inputValue2} onChange={handleInput2Change} placeholder="write our thoughts"/>
        <button onClick={handleButtonClick}>Add to Array</button>
      </div>
    </div>
  );
}

export default Article;
