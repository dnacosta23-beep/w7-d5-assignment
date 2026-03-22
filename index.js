"use strict";
//console.log("Hello, Nichole!");
const output = document.querySelector("output")

async function getKey() {
  try {
    const res = await fetch("https://proxy-key-beep.onrender.com/get-key", {
      method: "POST",
    });
    const data = await res.json();

    return data.key;
  } catch (error) {
    console.log(error);
  }
}

async function renderString(something){
    output.textContent = ""
    const p = document.createElement ("p")
    p.textContent = something
output.appendChild(p)
}

async function main (){
    renderString("Loading...")
    const key = await getKey ()
    renderString(key)
    console.log(key)
}

main ()
