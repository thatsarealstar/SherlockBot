/*
This is the init.js file. This file will be important.
It loads all functions on start up. This runs them all at once, not requiring you to type more fetches.
We do it for you!

PLEASE ONLY RUN ONCE, DO NOT BREAK THE CODE!
*/

let commands = [
  "https://raw.githubusercontent.com/thatsarealstar/SherlockBot/refs/heads/main/commands/test.js"
];

function Initilization(a) {
  let preferredname = localStorage.getItem("prefname");
  let preferredcolor = localStorage.getItem("prefcolor");
  
  // Check and set preferred name and color if they're not set
  if (MPP.client.user.name !== preferredname && MPP.client.user.color !== preferredcolor) {
    if (preferredname === "") {
      console.log("[INFO] You haven't set up a preferred name. Do !prefname 'name' to do so.");
    }
    if (preferredcolor === "") {
      console.log("[INFO] You haven't set up a preferred color. Do !prefcolor 'color' to do so.");
    }
    console.log("[WARN] Your name is not on saved preferred name. Would you like to use it?");
    MPP.client.sendArray([{ m: "userset", set: { name: preferredname, color: preferredcolor }}]);
    console.log("[INFO] Successfully set your name! You can always use !prefname 'name' to set a custom preferred name! Also use !prefcolor 'hex code' to set a custom preferred color!");
  }

  // Load all commands in the "commands" array and run them
  let cmdcount = 0
  
  commands.forEach(commandUrl => {
    fetch(commandUrl)
      .then(response => {
        return response.text();
      })
      .then(script => {
        eval(script);
        cmdcount++
        console.log(`[INFO] Successfully loaded a command!`);
      })
      .catch(error => {
        console.error(`[ERROR] ${error.message}`);
      });
  });
  if (cmdcount = 1) {
  console.log("[INFO] Successfully loaded all commands!")
}
}

Initilization();
