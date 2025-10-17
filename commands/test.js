// This is the command designed for testing. You run it, then it sends a simple message.
let msgobjurl = "https://raw.githubusercontent.com/thatsarealstar/SherlockBot/refs/heads/main/msg.js"
let response = await fetch(msgobjurl);
let script = await response.text();

eval(script)

MPP.client.sendArray([{m: "a", message: "Success! Commands are functional.", reply_to: msgobj}])
console.log("[LOG] Commands status functional!")
