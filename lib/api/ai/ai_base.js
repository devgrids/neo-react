class AiBaseApi {
  constructor(subPath) {
    this.apiUrl = process.env.LINGUA_LINK_API_URL + subPath;
  }
}

export default AiBaseApi;
