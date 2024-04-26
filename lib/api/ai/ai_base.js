class AiBaseApi {
  constructor(subPath) {
    this.apiUrl = process.env.NEO_API_URL + subPath;
  }
}

export default AiBaseApi;
