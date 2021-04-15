import axios from "axios";

export default class ApiResource {
  static async fetch(method: string, url: string /* body = null */) {
    try {
      let response: any;

      switch (method.toUpperCase()) {
        case "GET":
          response = await axios.get(url);
          break;
        case "POST":
          //response = await axios.post(`${apiRoot}/${url}`, body, config);
          break;
        case "PUT":
          //response = await axios.put(`${apiRoot}/${url}`, body, config);
          break;
        case "DELETE":
          //response = await axios.delete(`${apiRoot}/${url}`, config);
          break;
      }
      if (response !== undefined) {
        return response.data;
      }
    } catch (error) {
      //throw error;
      console.error("ERROR FETCH", error);
      return error;
    }
  }
}
