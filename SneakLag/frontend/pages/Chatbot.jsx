import React, { useState } from "react";
import ChatDisplay from "./ChatDisplay";
import Analyse from "./Analyse";

const Chatbot = () => {
  const [message, setMessage] = useState([
    {
      messages: "hey whats ur name",
      user: false,
    },
  ]);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    let List = [
      ...message,
      {
        messages: text,
        user: true,
      },
    ];

    if (List.length > 2) {
      const reply = Analyse(text);
      List = [
        ...List,
        {
          messages: reply,
        },
      ];
    } else {
      List = [
        ...List,
        {
          messages: `hey ${text},whats up`,
        },
      ];
    }

    setMessage(List);
    setText("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">CHATBOT</div>
      </div>
      <div className="row mt-4">
        <div className="col d-flex justify-content-center">
          <img
            style={{ maxHeight: "200px" }}
            src="https://img.freepik.com/premium-vector/chat-bot-vector-logo-design-concept_418020-241.jpg"
            alt="..."
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <div style={{ height: "600px", width: "800px" }} className="border">
            {message.map((data,index)=>{
                return (<ChatDisplay key={index} {...data}/>)
            })}
          </div> 
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <input
            placeholder="enter your message"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button onClick={handleSubmit}>📌</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
