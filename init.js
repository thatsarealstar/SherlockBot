/*
This is the init.js file. This file will be important.
It loads all functions on start up. This runs them all at once, not requiring you to type more fetches.
We do it for you!

PLEASE ONLY RUN ONCE, DO NOT BREAK THE CODE!
*/

let alrinit = false

function Initilization() {
  let preferredname = localStorage.getItem("prefname")
  let preferredcolor = localStorage.getItem("prefcolor")
  if (MPP.client.user.name !== preferredname && MPP.client.user.color !== preferredcolor) {
    console.log("[WARN] Your name is not on saved preferred name. Would you like to use it?")
    MPP.client.sendArray([{m: "userset", set: { name: preferredname, color: preferredcolor }}])
    console.log("[LOG] Successfully set your name! You can always use !prefname 'name' to set a custom preferred name! Also use !prefcolor 'hex code' to set a custom preferred color!")
  }
}

Initilization()
