import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const OpenAi = () => {
  const [input, setinput] = useState("");

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
        const responce = res.data.choices[0].message.content;
      });
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <button onClick={renderResponce}>search</button>
    </>
  );
};

export default OpenAi;
