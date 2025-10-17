// This is the command designed for testing. You run it, then it sends a simple message.
MPP.client.sendArray([{m: "a", message: "Success! Commands are functional.", reply_to: msg.id}])
console.log("[LOG] Commands status functional!")
