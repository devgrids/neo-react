import axios from "axios";
import AiBaseApi from "@/lib/api/ai/ai_base";

class TranslateApi extends AiBaseApi {
  constructor() {
    super("translate");
  }

  spanishToEnglish(message) {
    const data = {
      message: message,
    };
    const json = JSON.stringify(data);

    return axios.post(this.apiUrl + "/spanish_to_english", json, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  englishToSpanish(message) {
    const data = {
      message: message,
    };
    const json = JSON.stringify(data);

    return axios.post(this.apiUrl + "/english_to_spanish", json, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}

export default TranslateApi;
