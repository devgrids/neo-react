import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from "@/actions/user";
import withAuth from "@/hoc/withAuth";
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import HeaderVertical from "@/components/HeaderVertical";
import ChatResponse from "@/components/ChatResponse";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import InformationFooter from "@/components/InformationFooter";
import SelectedModel from "@/components/SelectedModel";
import ChatVisionApi from "@/lib/api/ai/chat_vision";

const ImageProcessing = () => {
  const { data, loading } = useGetUser();
  const msgEnd = useRef(null);

  let index_image = 0;

  const chatVisionApi = new ChatVisionApi();

  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [images, setImages] = useState([]);

  const [input, setInput] = useState("");
  const [messages, setMessagess] = useState([
    {
      text:
        "Hola " +
        data["name"] +
        ", soy el procesador de imágenes de GEMINI, en qué puedo ayudarte?",
      isBot: true,
      has_image: false,
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

  const addImageToChat = (image) => {
    setImages([...images, image]);
  };

  async function _sendMessage() {
    _openLoading();

    if (image) addImageToChat(image);

    let json;
    if (input != "") {
      json = await chatVisionApi.sendMessage(input, imageBase64);
    } else {
      json = await chatVisionApi.sendMessage(
        "Descripción breve de la imagen",
        imageBase64
      );
    }

    _closeLoading();
    let textResult = json.data.result;
    setMessagess([
      ...messages,
      {
        text: input,
        isBot: false,
        has_image: image ? true : false,
      },
      {
        text: textResult,
        isBot: true,
        has_image: false,
      },
    ]);
    setInput("");
    removeImage();
  }

  function _openLoading() {
    document.getElementById("loadingImage").style.display = "block";
    document.getElementById("sendPicture").style.display = "none";
    document.getElementById("sendImage").style.display = "none";
  }

  function _closeLoading() {
    document.getElementById("loadingImage").style.display = "none";
    document.getElementById("sendPicture").style.display = "block";
    document.getElementById("sendImage").style.display = "block";
  }

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataURL = reader.result;
        setImage(imageDataURL);

        const base64String = imageDataURL.split(",")[1];
        setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

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
                {/* <img
                  src="../images/rocket.svg"
                  alt="Upgrade"
                  className="listItemsImg"
                /> */}
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
                  image={message.isBot ? "../images/ia.png" : data["picture"]}
                  bot={message.isBot ? true : false}
                >
                  <MarkdownRenderer markdownText={message.text} />

                  {message.has_image && (
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <img
                        src={images[index_image++]}
                        alt="Load Image"
                        style={{ maxWidth: "100%", maxHeight: "300px" }}
                      />
                    </div>
                  )}
                </ChatResponse>
              ))}

              <div ref={msgEnd} />
            </div>
            <div className="chatFooter">
              <div className="inp">
                {image && (
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <img
                      src={image}
                      alt="Load Image"
                      style={{ maxWidth: "100%", maxHeight: "300px" }}
                    />
                    <button onClick={removeImage} style={removeButtonStyle}>
                      X
                    </button>
                  </div>
                )}
                <input
                  type="text"
                  name=""
                  placeholder="Enviar un mensaje"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />

                <div {...getRootProps()}>
                  <button className="send" {...getInputProps()} />
                  <img id="sendPicture" src="../images/picture.png" alt="" />
                </div>

                <button className="send" onClick={_sendMessage}>
                  <img id="sendImage" src="../images/send.svg" alt="" />
                </button>

                <img
                  id="loadingImage"
                  src="../images/load.gif"
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

const removeButtonStyle = {
  position: "absolute",
  top: "-10px",
  right: "-10px",
  background: "#ff0000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  lineHeight: "25px",
  textAlign: "center",
  cursor: "pointer",
  zIndex: "1",
};

export default withAuth(ImageProcessing)();
