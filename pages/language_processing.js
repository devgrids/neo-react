import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from "@/actions/user";
import withAuth from "@/hoc/withAuth";
import React, { useEffect, useRef, useState } from "react";
import HeaderVertical from "@/components/HeaderVertical";
import ChatResponse from "@/components/ChatResponse";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import InformationFooter from "@/components/InformationFooter";
import SelectedModel from "@/components/SelectedModel";
import ChatApi from "@/lib/api/ai/chat";

const LanguageProcessing = () => {
  const { data, loading } = useGetUser();
  const msgEnd = useRef(null);

  const chatApi = new ChatApi();

  const [input, setInput] = useState("");
  const [messages, setMessagess] = useState([
    {
      text:
        "Hola " + data["name"] + " encantado de verte, en qué puedo ayudarte?",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      _sendMessage();
    }
  };

  async function _sendMessage() {
    _openLoading();
    const json = await chatApi.sendMessage(input);
    _closeLoading();
    let textResult = json.data.result;
    setMessagess([
      ...messages,
      {
        text: input,
        isBot: false,
      },
      {
        text: textResult,
        isBot: true,
      },
    ]);
    setInput("");
  }

  function _openLoading() {
    document.getElementById("loadingImage").style.display = "block";
    document.getElementById("sendImage").style.display = "none";
  }

  function _closeLoading() {
    document.getElementById("loadingImage").style.display = "none";
    document.getElementById("sendImage").style.display = "block";
  }

  return (
    <BaseLayout user={data} loading={loading}>
      <div className="PageChat">
        <div className="App">
          <div className="sideBar">
            <div className="upperSide">
              <div className="upperSideBottom">
                <HeaderVertical user={data} loading={loading}></HeaderVertical>
              </div>
            </div>
            <div className="lowerSide">
              <div className="listItems">
                <img
                  src="images/rocket.svg"
                  alt="Upgrade"
                  className="listItemsImg"
                />
                Modelo
              </div>

              <div className="listItems">
                <SelectedModel></SelectedModel>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="chats">
              {messages.map((message, i) => (
                <ChatResponse
                  key={i}
                  image={
                    message.isBot ? "./images/ia.png" : data["picture"]
                  }
                  bot={message.isBot ? true : false}
                >
                  <MarkdownRenderer markdownText={message.text} />
                </ChatResponse>
              ))}

              <div ref={msgEnd} />
            </div>
            <div className="chatFooter">
              <div className="inp">
                <input
                  type="text"
                  name=""
                  placeholder="Enviar un mensaje"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />

                <button className="send" onClick={_sendMessage}>
                  <img id="sendImage" src="images/send.svg" alt="" />
                </button>

                <img
                  id="loadingImage"
                  src="images/load.gif"
                  alt=""
                  width={25}
                  style={{ display: "none" }}
                />
              </div>
              <InformationFooter></InformationFooter>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default withAuth(LanguageProcessing)();
