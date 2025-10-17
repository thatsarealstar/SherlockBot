// Globally identifies the msg object for scripts needing it. Basically all commands.
MPP.client.on("a", msg => {
  let msgobj = { msg }
})
