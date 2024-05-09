import axios from "axios";
import AiBaseApi from "@/lib/api/ai/ai_base";

class LanguageProcessingApi extends AiBaseApi {
  constructor() {
    super("language_processing");
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

export default LanguageProcessingApi;
