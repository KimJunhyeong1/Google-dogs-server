const passport = require("passport");
const SocketIO = require("socket.io");
const { isLoggedIn } = require("../api/middlewares/authorization");
const Doc = require("../models/Doc");

exports.socketIo = (server) => {
  const io = SocketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("client connect: ", socket.id);

    socket.on("get-doc", async (docId) => {
      const doc = await Doc.findOne({ _id: docId }).lean();

      socket.join(docId);
      socket.emit("load-doc", doc);

      socket.on("content-change", (content) => {
        socket.broadcast.to(docId).emit("broadcast-content-change", content);
      });

      socket.on("title-change", (title) => {
        socket.broadcast.to(docId).emit("broadcast-title-change", title);
      });

      socket.on("cursor-postion", (data) => {
        socket.broadcast.to(docId).emit("broadcast-other-cursor-postion", data);
      });

      socket.on("auto-save-doc", async (data) => {
        await Doc.findByIdAndUpdate({ _id: docId }, { ...data });
      });
    });
  });
};
