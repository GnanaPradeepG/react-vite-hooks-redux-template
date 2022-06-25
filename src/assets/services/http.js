import axios from "axios";

export default axios.create({
  baseURL: "ws://localhost:8081",
  headers: {
    "Content-type": "application/json"
  }
});
