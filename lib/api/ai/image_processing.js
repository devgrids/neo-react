import axios from "axios";
import AiBaseApi from "@/lib/api/ai/ai_base";

class ImageProcessingApi extends AiBaseApi {
  constructor() {
    super("image_processing");
  }

  sendMessage(message, image) {
    const data = {
      message: message,
      base64: image,
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

export default ImageProcessingApi;
