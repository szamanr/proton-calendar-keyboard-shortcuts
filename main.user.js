// ==UserScript==
// @name        Proton Calendar keyboard shortcuts
// @namespace   szamanr
// @description adds keyboard shortcuts to proton calendar 
// @match       https://calendar.proton.me/*
// @grant       none
// @version     0.1
// @author      szamanr
// @supportURL  https://github.com/szamanr/twitter-likes-ratio
// @licence     MIT
// ==/UserScript==

const switchView = (type) => {
  if (!["day", "month", "week"].includes(type)) return;

  document.querySelector("[data-testid='calendar-view:view-options-dropdown']").click();
  setTimeout(() => {
    document.querySelector(`[data-testid='view-option-${type}']`).click();
  }, 100);
  setTimeout(() => {
    document.querySelector("[data-testid='calendar-view:view-options-dropdown']").click();
  }, 100);
}

const goToToday = () => {
  document.querySelector("[data-testid='calendar-toolbar:today']").click();
}

const navigateBack = () => {
  document.querySelector("[data-testid='calendar-toolbar:previous']").click();
}

const navigateForward = () => {
  document.querySelector("[data-testid='calendar-toolbar:next']").click();
}

document.addEventListener('keydown', function(event) {
  if(["text", "textarea"].includes(event.target?.type)) return;

  const key = event.key.toLowerCase();

  if (key === "d") switchView("day");
  if (key === "m") switchView("month");
  if (key === "w") switchView("week");

  if (key === "t") goToToday();
  if (key === "j") navigateBack();
  if (key === "k") navigateForward();
});

