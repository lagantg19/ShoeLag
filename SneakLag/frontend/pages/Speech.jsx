

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Speech = () => {

  const {user}=useContext(AuthContext)
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const Navigate = useNavigate();
  const List = ["explore", "cart", "sell", "chatbot", "inventory","login","logout","signup"];

  const handleStop = () => {
    SpeechRecognition.stopListening();

    List.map((item) => {
      console.log(transcript);
      if (transcript == item) {
        Navigate(`/${transcript}`);
      }
    });
  };

  return (
    <>
      <div>
        <div className="btn-style">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            disabled={!user.email}
          >
            USE VOICE
          </button>
          <div
            className=" modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Voice Lag
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className=" main modal-body">{transcript}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={startListening}
                  >
                    RECORD
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetTranscript}
                  >
                    RESET
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleStop}
                  >
                    STOP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speech;
