import React from "react";

const ChatDisplay = ({ messages, user }) => {
  return (
    <>
      {!user ? (
        <div className="row">
          <div className="col d-flex justify-content-start ">
            <h4
              className="bg-info-subtle "
              style={{ "border-radius": "5px", padding: "5px" }}
            >
              {messages}
            </h4>🤖
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col d-flex justify-content-end ">🥰
            <h4
              className="bg-danger-subtle"
              style={{ "border-radius": "5px", padding: "5px" }}
            >
              {messages}
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatDisplay;
