import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Style.css";

const OpenAi = () => {
  const [input, setinput] = useState("");
  const [responce, setresponce] = useState("");

  const configuration = new Configuration({
    organization: "org-6SJGrNrFhkEAe6IQKYnadYRa",
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const renderResponce = () => {
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      })
      .then((res) => {
        console.log(res.data.choices[0].message.content);
        setresponce(res.data.choices[0].message.content);
        console.log("qqqqqqqqqqqqqqqq", responce);
      });
  };

  return (
    <div style={{ display: "grid", placeItems: "center", margin: "20px" }}>
      <input
        placeholder="search something"
        className="my-input"
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <button onClick={renderResponce} className="my-button">
        search
      </button>
      <p className="my-para">{responce}</p>
    </div>
  );
};

export default OpenAi;
