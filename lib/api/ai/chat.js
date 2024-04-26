import axios from "axios";
import AiBaseApi from "@/lib/api/ai/ai_base";

class ChatApi extends AiBaseApi {
  constructor() {
    super("chat");
  }

  sendMessage(message) {
    const data = {
      message: message,
    };
    const json = JSON.stringify(data);

    return axios.post(this.apiUrl + "/send_message", json, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}

export default ChatApi;
