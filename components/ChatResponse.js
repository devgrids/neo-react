const ChatResponse = ({ key, image, bot, children }) => {
  return (
    <div key={key} className={bot ? "chat bot" : "chat"}>
      <img className="chatImg" src={image} alt="" />
      <p className="txt">{children}</p>
    </div>
  );
};

export default ChatResponse;
