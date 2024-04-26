import axios from "axios";
import AiBaseApi from "@/lib/api/ai/ai_base";

class VisionTransformerApi extends AiBaseApi {
  constructor() {
    super("vision_transformer");
  }

  generateContent(data) {
    const data_json = {
        base64: data,
    };
    const json = JSON.stringify(data_json);

    return axios.post(this.apiUrl + "/generate_content", json, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}

export default VisionTransformerApi;
