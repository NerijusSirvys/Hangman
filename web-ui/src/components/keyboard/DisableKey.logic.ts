export const DisableKey = (e: any) => {
  // in case parent node was clicked instead of actual letter
  // add class to the letter
  if (e.target.parentNode.classList.contains("key-letter")) {
    e.target.parentNode.classList.add("used");
  } else {
    e.target.classList.add("used");
  }
};
