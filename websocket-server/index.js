import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { faker } from "@faker-js/faker";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server);

io.of("/cat").on("connection", (socket) => {
  setInterval(() => {
    const cat = faker.animal.cat();
    socket.emit("name", cat);
  }, 1000);
});

io.of("/song").on("connection", (socket) => {
  setInterval(() => {
    const song = faker.music.songName();
    socket.emit("name", song);
  }, 1000);
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
