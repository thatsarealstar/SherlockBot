// The command designed for testing!
let msgobjurl = "https://raw.githubusercontent.com/thatsarealstar/SherlockBot/refs/heads/main/msg.js";

let response = await fetch(msgobjurl);
let script = await response.text();

// Execute the msg.js to make msgobj global
eval(script);

// Now that msgobj is global, we can use it
if (window.msgobj) {
  MPP.client.sendArray([{ m: "a", message: "Success! Commands are functional.", reply_to: window.msgobj.id }]);
  console.log("[INFO] Commands status functional!");
} else {
  console.log("[ERROR] msgobj is not available.");
}
