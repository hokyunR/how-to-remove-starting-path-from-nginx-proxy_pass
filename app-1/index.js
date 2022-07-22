import { io } from "socket.io-client";

const socket = io("/cat", {
  transports: ["websocket"],
});
const messageEelement = document.querySelector("#message");

socket.on("name", function (msg) {
  messageEelement.textContent = msg;
});
