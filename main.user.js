// ==UserScript==
// @name        Proton Calendar keyboard shortcuts
// @namespace   szamanr
// @description adds additional keyboard shortcuts to proton calendar
// @match       https://calendar.proton.me/*
// @grant       none
// @version     0.2
// @author      szamanr
// @supportURL  https://github.com/szamanr/proton-calendar-keyboard-shortcuts
// @licence     MIT
// ==/UserScript==

const sendKey = (key) => document.dispatchEvent(new KeyboardEvent('keydown', { key }));

document.addEventListener('keydown', function(event) {
  if(["text", "textarea"].includes(event.target?.type)) return;

  const key = event.key.toLowerCase();

  if (key === "d") sendKey("1")
  if (key === "w") sendKey("2");
  if (key === "m") sendKey("3");

  if (key === "j") sendKey("ArrowLeft");
  if (key === "k") sendKey("ArrowRight");
});

